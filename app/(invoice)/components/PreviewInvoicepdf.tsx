import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { table } from "console";
import { AudioWaveform, LucideAirVent } from "lucide-react";

const minipay =
  "data:image/jpeg;base64,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";

// Create Document Component
const PreviewInvoicepdf = () => (
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
          <Text style={styles.textXs}>james.olie@gmail.com, 2457889890</Text>
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
            <Text style={styles.textItalic}>Thank you for your business</Text>
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
);

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
    fontWeight: "bold",
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
