"use client";

import { Box, Button, Typography, TextField, Paper } from "@mui/material";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { baseUrl } from "@/utils/baseUrl";

export function PaymentView() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    nameOnCard: "",
    cardNumber: "",
    cvv: "",
    expirationDate: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    nameOnCard: "",
    cardNumber: "",
    cvv: "",
    expirationDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = { ...errors };
    let formIsValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      formIsValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      formIsValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
      formIsValid = false;
    } else {
      newErrors.address = "";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      formIsValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
      formIsValid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.nameOnCard) {
      newErrors.nameOnCard = "Name on card is required";
      formIsValid = false;
    } else {
      newErrors.nameOnCard = "";
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
      formIsValid = false;
    } else if (!/^\d{8}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Invalid card number (8 digits required)";
      formIsValid = false;
    } else {
      newErrors.cardNumber = "";
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
      formIsValid = false;
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Invalid CVV (3 or 4 digits required)";
      formIsValid = false;
    } else {
      newErrors.cvv = "";
    }

    if (!formData.expirationDate) {
      newErrors.expirationDate = "Expiration date is required";
      formIsValid = false;
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Invalid expiration date (MM/YY)";
      formIsValid = false;
    } else {
      newErrors.expirationDate = "";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const orderId = localStorage.getItem("orderId");
        if (!orderId || isNaN(parseInt(orderId, 10))) {
          alert("Invalid order ID. Please try again.");
          return;
        }

        const payload = {
          paymentDto: {
            ...formData,
          },
          orderId: parseInt(orderId, 10),
        };

        const response = await fetch(`${baseUrl}/Payments/create-payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error response:", errorText);
          throw new Error("Failed to submit payment");
        }

        const result = await response.json();

        localStorage.setItem("paymentDetails", JSON.stringify(formData));

        window.location.href = "/checkout/confirmation";
      } catch (error) {
        console.error("Error submitting payment:", error);
        alert("Failed to submit payment. Please try again.");
      }
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10, mx: 2 }}>
      <Paper
        elevation={3}
        sx={{ mt: 10, mb: 8, p: 4, maxWidth: 580, width: "100%" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mb: 2, textAlign: "center" }}
        >
          Betalningsinformation
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            fullWidth
            label="Förnamn"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            error={!!errors.firstName}
            helperText={errors.firstName}
          />

          <TextField
            fullWidth
            label="Efternamn"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            error={!!errors.lastName}
            helperText={errors.lastName}
          />

          <TextField
            fullWidth
            label="Telefonnummer"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />

          <TextField
            fullWidth
            label="Adress"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            error={!!errors.address}
            helperText={errors.address}
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              label="Stad"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Postnummer"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
            />
          </Box>

          <TextField
            fullWidth
            label="Kortnummer"
            name="cardNumber"
            type="text"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              label="Namn på kortet"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              required
              error={!!errors.nameOnCard}
              helperText={errors.nameOnCard}
            />

            <TextField
              fullWidth
              label="Utgångsdatum(MM/YY)"
              name="expirationDate"
              placeholder="MM/YY"
              value={formData.expirationDate}
              onChange={handleChange}
              required
              error={!!errors.expirationDate}
              helperText={errors.expirationDate}
            />
          </Box>

          <TextField
            label="CVV"
            name="cvv"
            type="text"
            value={formData.cvv}
            onChange={handleChange}
            required
            error={!!errors.cvv}
            helperText={errors.cvv}
            sx={{ width: "45%" }}
          />

          <Box sx={{ mt: 3, mb: 1 }}>
            <Button
              variant="contained"
              color="warning"
              type="submit"
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                gap: 1,
                px: 3,
                py: 2,
              }}
            >
              Bekräfta betalning
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
