"use client"; // Ensure the component is client-side rendered

import ShopForm from "@/components/shops/new/ShopForm";

// This will make sure CreateShop is a Client Component as well.
const CreateShop = () => {
  const handleShopSubmit = async (shopData: {
    name: string;
    description: string;
  }) => {
    // Handle the data submission
    console.log(shopData);

    // Send a POST request to the json-server endpoint (http://localhost:5000/shops)
    try {
      const response = await fetch("http://localhost:5000/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopData),
      });

      if (response.ok) {
        console.log("Shop created successfully!");
        // Redirect to the dashboard or homepage
        window.location.href = "http://localhost:3000/"; // Update to redirect to the desired location
      } else {
        console.error("Failed to create shop");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <ShopForm onSubmit={handleShopSubmit} />;
};

export default CreateShop;
