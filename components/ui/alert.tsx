"use client";

import { useCartStore } from "@/store/cart-store";
import { Snackbar, Alert } from "@mui/material";

export const AlertComponent = () => {
	const { isAlertOpen, alertMessage, setAlert } = useCartStore();

	const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") return;
		setAlert(false);
	};
	return (
		<div className="absolute bottom-0">
			<Snackbar
				open={isAlertOpen}
				autoHideDuration={2000}
				onClose={handleClose}
				sx={{ zIndex: 9999 }}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
				<Alert severity="success">{alertMessage}</Alert>
			</Snackbar>
		</div>
	);
};
