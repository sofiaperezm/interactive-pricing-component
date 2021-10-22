const pageViews = document.querySelector(".pageviews-count");
const pageViewsInput = document.querySelector("#pageviews-input");
const priceOutput = document.querySelector(".price");
const billingToggle = document.querySelector("#billing-toggle");

const priceRanges = {"10K": 8, "50K": 12, "100K": 16, "500K": 24, "1M": 36};
const YEARLY_DISCOUNT = 0.25;

pageViewsInput.addEventListener("input", handlePageViewsCount);
billingToggle.addEventListener("change", calculatePrice);

function getPageViews(pageViewsCount) {
    if (pageViewsCount <= 10000) {
        return "10K";
    }
    if (pageViewsCount > 10000 && pageViewsCount <= 50000) {
        return "50K";
    }
    if (pageViewsCount > 50000 && pageViewsCount <= 100000) {
        return "100K";
    }
    if (pageViewsCount > 100000 && pageViewsCount <= 500000) {
        return "500K";
    }
    if (pageViewsCount > 500000 && pageViewsCount <= 1000000) {
        return "1M";
    }
}

function handlePageViewsCount() {
    const pageViewsCount = pageViewsInput.value;
    const pageViewsOutput = getPageViews(pageViewsCount);

    pageViews.innerHTML = `${pageViewsOutput} PAGEVIEWS`;

    calculatePrice();
};

function calculatePrice() {
    const billingToggleChecked = billingToggle.checked;
    const pageViewsCount = pageViewsInput.value;
    const pageViewsOutput = getPageViews(pageViewsCount);
    const pricing = priceRanges[pageViewsOutput];
    
    if (billingToggleChecked) {
        const yearlyPrice = pricing * 12;
        const yearlyPlan = yearlyPrice - yearlyPrice * YEARLY_DISCOUNT;
        priceOutput.innerHTML = `$${yearlyPlan}/year`;
    } else {
        priceOutput.innerHTML = `$${pricing}/month`;
    }
};