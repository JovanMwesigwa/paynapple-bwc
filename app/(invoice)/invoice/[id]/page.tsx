"use client";

import { upsertGetInvoiceById } from "@/app/actions/invoices";
import useFetchOne from "@/app/hooks/useFetch";
import { Product } from "@prisma/client";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { AudioWaveform, Loader } from "lucide-react";
import { useParams } from "next/navigation";

// Create Document Component
const PreviewInvoicepdfPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchOne(
    upsertGetInvoiceById,
    Number(id),
    "getInvoice"
  );

  if (isLoading)
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loader size={16} />
      </div>
    );

  if (!data) return null;

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.titleContainer}>
            <View style={styles.brandContainer}>
              <View style={styles.logoContainer}>
                <View style={styles.logo}>
                  <Text>🎨</Text>
                </View>
                <Text style={styles.brandName}>Zowie Designs</Text>
              </View>
              <Text style={styles.textXs}>Katabi, Zone B</Text>
              <Text style={styles.textXs}>2567019191917</Text>
              <Text style={styles.textXs}>jovanmwesigwa79@gmail.com</Text>
            </View>

            <View style={styles.brandContainer}>
              <Text style={styles.invoiceTitle}>INVOICE</Text>
              <Text style={styles.textXs}>#INV0002</Text>
              <Text style={styles.textXs}>Date: 04/08/2024</Text>
              <Text style={styles.textXs}>Due Date: 04/24/2024</Text>
            </View>
          </View>

          {/* Bill to */}
          <View style={styles.titleContainer}>
            <View style={styles.brandContainer}>
              <Text
                style={{ ...styles.textXsBold, textDecoration: "underline" }}
              >
                Bill to: {data.client.name}
              </Text>
              <Text style={styles.textXs}>{data.client.email}</Text>
              <Text style={styles.textXs}>{data.client.phone}</Text>
            </View>
          </View>

          {/* Items */}
          <View style={styles.itemsContainer}>
            <View style={styles.tableHeader}>
              <View style={styles.tableItemContainerStart}>
                <Text>#</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>Items</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>Qty</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>Unit Cost</Text>
              </View>
              <View style={styles.tableItemContainerEnd}>
                <Text>Total</Text>
              </View>
            </View>

            {data.products &&
              data.products.map((product: Product, index: any) => (
                <View style={styles.tableItem} key={product.id}>
                  <View style={styles.tableItemContainerStart}>
                    <Text>{index + 1}</Text>
                  </View>
                  <View style={styles.tableItemContainer}>
                    <Text>{product.name}</Text>
                  </View>
                  <View style={styles.tableItemContainer}>
                    <Text>{product.quantity}</Text>
                  </View>
                  <View style={styles.tableItemContainer}>
                    <Text>${product.price.toFixed(2)}</Text>
                  </View>
                  <View style={styles.tableItemContainerEnd}>
                    <Text>
                      ${(product.price * product.quantity).toFixed(2)}
                    </Text>
                  </View>
                </View>
              ))}
          </View>

          {/* Payment info */}
          <View style={styles.paymentInfoContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.brandContainer}>
                <Text style={styles.textItalic}>{data.thankYouNotes}</Text>
                <Text
                  style={{
                    ...styles.textXsBold,
                    marginTop: 10,
                    textDecoration: "underline",
                  }}
                >
                  Payment Info:
                </Text>
                <View style={styles.payContainer}>
                  <View style={{ display: "flex", flexDirection: "column" }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View
                        style={{
                          width: 15,
                          borderRadius: 2,
                          height: 15,
                          marginRight: 4,
                          backgroundColor: "#03955E",
                          alignItems: "center",
                        }}
                      />
                      <Text
                        style={{
                          ...styles.textXsBold,
                          fontWeight: "bold",
                          marginRight: 4,
                          textDecoration: "underline",
                        }}
                      >
                        MiniPay:
                      </Text>
                    </View>
                    <View style={{ display: "flex" }}>
                      <Text style={styles.textXs}>{data.wallet}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.payContainer}>
                  <View
                    style={{
                      width: 15,
                      borderRadius: 15,
                      height: 15,
                      marginRight: 4,
                      backgroundColor: "#46CD85",
                      alignItems: "center",
                    }}
                  />
                  <Text style={styles.textXs}>Celo Dollar | cUSD</Text>
                </View>
                <View style={styles.payContainer}>
                  <View
                    style={{
                      width: 15,
                      borderRadius: 15,
                      height: 15,
                      marginRight: 4,
                      backgroundColor: "#2670C4",
                      alignItems: "center",
                    }}
                  />
                  <Text style={styles.textXs}>Circle | USDC</Text>
                </View>
              </View>
            </View>

            <View style={styles.titleContainer}>
              <View style={{ ...styles.brandContainer, width: "100%" }}>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: 8,
                    borderBottom: "1px solid black",
                  }}
                >
                  <Text style={styles.textXsBold}>SubTotal</Text>
                  <Text style={styles.textXsBold}>${data.subTotal}</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 8,
                  }}
                >
                  <Text style={styles.textXsBold}>Total</Text>
                  <Text style={styles.textXsBold}>${data.total}</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 8,
                  }}
                >
                  <Text style={styles.textXsBold}>Balance Due</Text>
                  <Text style={styles.textXsBold}>${data.total}</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 8,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        borderRadius: 3,
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <AudioWaveform size={40} color="#409af5" />
                    </View>

                    <Text style={styles.textXs}>Zowie Designs</Text>
                    <Text style={styles.textXs}>04/18/2024</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ ...styles.textXsBold, textDecoration: "underline" }}>
              Customer note
            </Text>
            <Text style={styles.textXs}>{data.customerNotes}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={{ ...styles.textXsBold, textDecoration: "underline" }}>
              Invoice Terms
            </Text>
            <Text style={styles.textXs}>{data.terms}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
    width: "100%",
    display: "flex",
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    marginBottom: 20,
  },
  invoiceTitle: {
    fontSize: 18,
    color: "#f56a00", // Assuming orange from the logo for title
    marginBottom: 4,
  },
  brandContainer: {
    display: "flex",
    flexDirection: "column",
  },
  brandName: {
    color: "#403f3e",
    fontWeight: "demibold",
  },
  textXs: {
    fontSize: 11,
    color: "#403f3e",
    marginBottom: 4,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 35,
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    marginRight: 8,
    fontSize: 20,
  },
  textXsBold: {
    fontSize: 11,
    color: "#403f3e",
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff5d9",
    width: "100%",
    padding: 8,
    borderRadius: 3,
    fontSize: 12,
  },
  tableItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderRadius: 3,
    fontSize: 12,
    borderBottom: "1px solid #f0f0f0",
  },
  tableItemContainerStart: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  tableItemContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tableItemContainerEnd: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  paymentInfoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 25,
  },
  textItalic: {
    fontSize: 11,
    color: "#403f3e",
    fontStyle: "italic",
    marginBottom: 6,
  },
  payContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    width: "100%",
  },
});

export default PreviewInvoicepdfPage;
