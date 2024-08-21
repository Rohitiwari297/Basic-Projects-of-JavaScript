const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
        return "Original price must be greater than zero";
    }
    if (discountedPrice < 0 || discountedPrice > originalPrice) {
        return "Discounted price must be between 0 and the original price";
    }

    // Calculate the discount percentage
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    // Round off to two decimal places
    return discountPercentage.toFixed(2);
};

// Example usage
const originalPrice = 500;
const discountedPrice = 350;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);

