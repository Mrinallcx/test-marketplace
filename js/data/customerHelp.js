const customerHelpData = [
    {
        iconSrc: "https://cdn.lordicon.com/zzjjvkam.json",
        title: "Free Shipping",
        description: "Get your sunglasses in 4-7 business days."
    },
    {
        iconSrc: "https://cdn.lordicon.com/xzalkbkz.json",
        title: "Here to help",
        description: "Customer service is available Monday through Friday."
    },
    {
        iconSrc: "https://cdn.lordicon.com/kxockqqi.json",
        title: "Secure Payment",
        description: "We keep your payment information safe."
    },
    {
        iconSrc: "https://cdn.lordicon.com/fyxgoiep.json",
        title: "10-Days Return Policy",
        description: "We think you’ll love it. If you don’t, let us know!"
    }
];
export function customerHelp() {
    const elements = document.getElementsByClassName('customerHelpCnt');

    Array.from(elements).forEach(el => {
        el.innerHTML = customerHelpData.map(col => `
            <div class="col">
                <lord-icon src="${col.iconSrc}" trigger="loop" delay="0" colors="primary:#000,secondary:#000" style="width: 80px; height: 80px;"></lord-icon>
                <h4 class="mT1">${col.title}</h4>
                <p class="mT1">${col.description}</p>
            </div>
        `).join('');
    });
}

