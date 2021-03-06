const pageViews = document.querySelector(".pageviews-count");
const pageViewsInput = document.querySelector("#pageviews-input");
const priceOutput = document.querySelector(".price");
const billingToggle = document.querySelector("#billing-toggle");

const priceRanges = {"0": 0, "10K": 8, "50K": 12, "100K": 16, "500K": 24, "1M": 36};
const YEARLY_DISCOUNT = 0.25;

pageViewsInput.addEventListener("input", handlePageViewsCount);
billingToggle.addEventListener("change", calculatePrice);


function getPageViews(pageViewsCount) {
    const pageViewsNumber = parseInt(pageViewsCount, 10)
    if (pageViewsNumber >= 0 && pageViewsNumber < 10000) {
        return "0";
    }
    if (pageViewsNumber >= 10000 && pageViewsNumber < 50000) {
        return "10K";
    }
    if (pageViewsNumber >= 50000 && pageViewsNumber < 100000) {
        return "50K";
    }
    if (pageViewsNumber >= 100000 && pageViewsNumber < 500000) {
        return "100K";
    }
    if (pageViewsNumber >= 500000 && pageViewsNumber < 1000000) {
        return "500K";
    }
    if (pageViewsNumber === 1000000) {
        return "1M";
    }
}

function handlePageViewsCount() {
    const pageViewsCount = pageViewsInput.value;
    let pageViewsOutput = "100K";

    if (pageViewsCount >= 0 && pageViewsCount < 1000) {
        pageViewsOutput = `${pageViewsCount}`
    }
    if (pageViewsCount >= 1000 && pageViewsCount < 10000) {
        pageViewsOutput = `${pageViewsCount.slice(0, 1)}K`
    }
    if (pageViewsCount >= 10000 && pageViewsCount < 100000) {
        pageViewsOutput = `${pageViewsCount.slice(0, 2)}K`
    }
    if (pageViewsCount >= 100000 && pageViewsCount < 1000000) {
        pageViewsOutput = `${pageViewsCount.slice(0, 3)}K`
    }
    if (pageViewsCount >= 1000000) {
        pageViewsOutput = `${pageViewsCount.slice(0, 1)}M`
    }

    pageViews.innerHTML = `${pageViewsOutput} PAGEVIEWS`;

    calculatePrice();
};

function calculatePrice() {
    const billingToggleChecked = billingToggle.checked;
    const pageViewsCount = pageViewsInput.value;
    const pageViewsOutput = getPageViews(pageViewsCount);
    const pricing = priceRanges[pageViewsOutput];
    
    if (billingToggleChecked) {
        const yearlyPlan = pricing - pricing * YEARLY_DISCOUNT;
        priceOutput.innerHTML = `$${yearlyPlan.toFixed(2)}`;
    } else {
        priceOutput.innerHTML = `$${pricing.toFixed(2)}`;
    }
};

handlePageViewsCount();