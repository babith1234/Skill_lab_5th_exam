// const mongoose = require("mongoose");
// const Order = require("../models/orders");
// const multer = require("multer");
// const fs = require("fs");


// const upload = multer({ dest: "uploads/" });

// exports.placeOrder = async (req, res) => {
//   try {
//     const { user_Id, food_Id, paymentMode, quantity, order_Id, created_At, updated_At } = req.body;

//     const userIdObject = new mongoose.Types.ObjectId(user_Id);

//     const newOrder = new Order({
//       user_Id: userIdObject,
//       food_Id,
//       paymentMode,
//       quantity,
//       order_Id: generateOrderId(),
//       created_At: new Date(),
//       updated_At: new Date(),
//     });

//     await newOrder.save();

//     res.json({
//       success: true,
//       message: "Order placed successfully",
//       orderId: newOrder.order_Id,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// exports.submitFeedback = async (req, res) => {
//   try {
//     const { rating, imageLink } = req.body;
//     const order_Id = req.params.orderId;

//     // Handle file upload
//     upload.single("file")(req, res, async function (err) {
//       if (err) {
//         console.error("File upload error:", err);
//         return res.status(500).json({ error: "File upload error" });
//       }

//       try {
//         // Extract text data from file
//         const textData = await extractTextFromFile(req.file);

//         // Update order with feedback data
//         const updatedOrder = await Order.findByIdAndUpdate(
//           order_Id,
//           {
//             rating,
//             imageLink,
//             fileData: textData ? textData.link : null,
//             updated_At: new Date(),
//           },
//           { new: true }
//         );

//         if (!updatedOrder) {
//           return res.status(404).json({ error: "Order not found" });
//         }

//         res.json({
//           success: true,
//           message: "Feedback submitted successfully",
//           updatedOrder,
//         });
//       } catch (error) {
//         console.error("Error processing feedback:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// function generateOrderId() {
//   return Math.random().toString(36).substr(2, 9).toUpperCase();
// }

// async function extractTextFromFile(file) {
//   if (!file || !file.path) {
//     console.error(
//       "Error extracting text from file: File or file path is missing"
//     );
//     return null;
//   }

//   try {
//     const text = fs.readFileSync(file.path, "utf-8");

//     const textFilePath = `uploads/text_${Date.now()}.txt`;
//     fs.writeFileSync(textFilePath, text);

//     return { link: textFilePath };
//   } catch (error) {
//     console.error("Error extracting text from file:", error);
//     return null;
//   }
// }
