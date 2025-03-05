"use client";

import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function PaymentView() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    bankNumber: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    bankNumber: "",
    cvc: "",
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

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, proceeding...");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10, mx: 2 }}>
      <Paper
        elevation={3}
        sx={{ mt: 8, mb: 6, p: 4, maxWidth: 580, width: "100%" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mb: 2, textAlign: "center" }}
        >
          Payment Details
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            error={!!errors.firstName}
            helperText={errors.firstName}
          />

          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            error={!!errors.lastName}
            helperText={errors.lastName}
          />

          <TextField
            fullWidth
            label="Address"
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
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Post Code"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              label="Bank Number"
              name="bankNumber"
              type="text"
              value={formData.bankNumber}
              onChange={handleChange}
            />
            <TextField
              label="CVC"
              name="cvc"
              type="text"
              value={formData.cvc}
              onChange={handleChange}
              sx={{ width: "45%" }}
            />
          </Box>

          <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                gap: 1,
                px: 6,
                py: 2,
              }}
            >
              Confirm Payment
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
