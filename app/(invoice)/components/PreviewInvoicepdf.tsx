import { Button } from "@/components/ui/button";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";
import { AudioWaveform, Download, Share2 } from "lucide-react";
import React from "react";

// Create Document Component
const PreviewInvoicepdf = () => {
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
              <Text style={styles.textXsBold}>Bill to: Mr. James Lineaker</Text>
              <Text style={styles.textXs}>Katabi, Zone B</Text>
              <Text style={styles.textXs}>Heywateeth, Bournemouth</Text>
              <Text style={styles.textXs}>
                james.olie@gmail.com, 2457889890
              </Text>
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

            <View style={styles.tableItem}>
              <View style={styles.tableItemContainerStart}>
                <Text>1</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>UI/UX Design</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>5</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>$100.00</Text>
              </View>
              <View style={styles.tableItemContainerEnd}>
                <Text>$500</Text>
              </View>
            </View>

            <View style={styles.tableItem}>
              <View style={styles.tableItemContainerStart}>
                <Text>2</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>Front-end</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>6</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>$100.00</Text>
              </View>
              <View style={styles.tableItemContainerEnd}>
                <Text>$800</Text>
              </View>
            </View>

            <View style={styles.tableItem}>
              <View style={styles.tableItemContainerStart}>
                <Text>3</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>Backend</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>4</Text>
              </View>
              <View style={styles.tableItemContainer}>
                <Text>$100.00</Text>
              </View>
              <View style={styles.tableItemContainerEnd}>
                <Text>$700</Text>
              </View>
            </View>
          </View>

          {/* Payment info */}
          <View style={styles.paymentInfoContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.brandContainer}>
                <Text style={styles.textItalic}>
                  Thank you for your business
                </Text>
                <Text style={{ ...styles.textXsBold, marginTop: 10 }}>
                  Payment Info:
                </Text>
                <View style={styles.payContainer}>
                  <View
                    style={{
                      width: 15,
                      borderRadius: 2,
                      height: 15,
                      marginRight: 4,
                      backgroundColor: "#03955E",
                    }}
                  />
                  <Text style={styles.textXs}>MiniPay Wallet</Text>
                </View>
                <View style={styles.payContainer}>
                  <View
                    style={{
                      width: 15,
                      borderRadius: 15,
                      height: 15,
                      marginRight: 4,
                      backgroundColor: "#46CD85",
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
                  <Text style={styles.textXsBold}>$2,000.00</Text>
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
                  <Text style={styles.textXsBold}>$2,000.00</Text>
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
                  <Text style={styles.textXsBold}>$2,000.00</Text>
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
            }}
          >
            <Text style={styles.textXsBold}>Customer note</Text>
            <Text style={styles.textXs}>
              Most preffered mode of payment to be done with MiniPay
            </Text>
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
    fontWeight: "semibold",
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
  },
});

export default PreviewInvoicepdf;
