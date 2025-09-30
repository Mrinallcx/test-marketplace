const personalizedEyecareData = {
    "columns": [
        {
            "rows": [
                {
                    "icon": "https://cdn.lordicon.com/hbtheitu.json",
                    "title": "Digital Life Style",
                    "description": "Improve your lifestyle with accurate eyewear for a strain-free view."
                },
                {
                    "icon": "https://cdn.lordicon.com/frbjtwdl.json",
                    "title": "Great Gamer",
                    "description": "Enhance your sessions with eyewear crafted for the gamer within you."
                }
            ]
        },
        {
            "rows": [
                {
                    "icon": "https://cdn.lordicon.com/oxbjzlrk.json",
                    "title": "Outdoor Lover",
                    "description": "Experience the outdoor with unmatched clarity and extra comfort."
                },
                {
                    "icon": "https://cdn.lordicon.com/isrpughu.json",
                    "title": "Always Driving",
                    "description": "Guide every adventure, Glasses designed for the perpetual driver."
                }
            ]
        }
    ]
};

export function personalizedEyecareContent() {
    const personalizedEyecareWrapper = document.querySelector('#personalizedEyecare');
    if (!personalizedEyecareWrapper) return;

    personalizedEyecareWrapper.innerHTML = personalizedEyecareData.columns.map((column, colIndex) => `
        <div class="col col${colIndex + 1}">
            ${column.rows.map((row, rowIndex) => `
                <div class="row row${rowIndex + 1}">
                    <lord-icon
                        src="${row.icon}"
                        trigger="loop"
                        delay="0"
                        colors="primary:#000,secondary:#000"
                        style="width: 120px; height: 120px;">
                    </lord-icon>
                    <h3 class="mT4">${row.title}</h3>
                    <p class="mT1">${row.description}</p>
                </div>
            `).join('')}
        </div>
    `).join('');
}