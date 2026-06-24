window.addEventListener('DOMContentLoaded', () => {

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    const projectData = {
        "overdraft": {
    title: "Overdraft in India: Why 75M Eligible Users Don't Activate",
    content: `
    <div class="modal-header" style="border-bottom: 1px solid rgba(166, 80, 47, 0.2); padding-bottom: 10px;">
        <h2 style="margin: 0; color: #2B1B12; font-size: 1.5rem;">Overdraft in India: Why 75M Eligible Users Don't Activate</h2>
        <p style="color: #A6502F; margin-top: 2px; font-weight: 500; font-size: 0.9rem;">A Product Discovery & Behavioral Design Case Study</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 15px 0;">
        <div style="background: rgba(166, 80, 47, 0.05); border: 1px solid rgba(166, 80, 47, 0.2); padding: 10px; border-radius: 12px; text-align: center;">
            <span style="font-size: 0.65rem; color: #8B7355; text-transform: uppercase;">Estimated Active</span><br>
            <strong style="font-size: 1.1rem; color: #2B1B12;">24M</strong>
        </div>
        <div style="background: rgba(166, 80, 47, 0.05); border: 1px solid rgba(166, 80, 47, 0.2); padding: 10px; border-radius: 12px; text-align: center;">
            <span style="font-size: 0.65rem; color: #8B7355; text-transform: uppercase;">Eligible Users</span><br>
            <strong style="font-size: 1.1rem; color: #2B1B12;">99M</strong>
        </div>
        <div style="background: rgba(166, 80, 47, 0.05); border: 1px solid rgba(166, 80, 47, 0.2); padding: 10px; border-radius: 12px; text-align: center;">
            <span style="font-size: 0.65rem; color: #8B7355; text-transform: uppercase;">Market Growth</span><br>
            <strong style="font-size: 1.1rem; color: #2B1B12;">₹3,850 Cr</strong>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
        <div style="background: #FDF8F2; padding: 15px; border-radius: 12px; border: 1px solid rgba(43, 27, 18, 0.05);">
            <h4 style="color: #A16207; margin: 0 0 5px 0; font-size: 0.9rem;">The Core Problem</h4>
            <p style="font-size: 0.8rem; color: #8B7355; line-height: 1.4; margin: 0;">75M eligible users don't activate OD because discovery is poorly timed and costs are uninterpretable under stress.</p>
        </div>
        <div style="background: #FDF8F2; padding: 15px; border-radius: 12px; border: 1px solid rgba(43, 27, 18, 0.05);">
            <h4 style="color: #2F855A; margin: 0 0 5px 0; font-size: 0.9rem;">Strategic Recommendations</h4>
            <ul style="font-size: 0.8rem; color: #8B7355; line-height: 1.3; padding-left: 15px; margin: 0;">
                <li>Discovery at point-of-need (&lt; ₹1000)</li>
                <li>Pricing in ₹ terms ("₹21 for 10 days")</li>
                <li>Repayment notifications in bank app</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; align-items: center;">
        <h3 style="color: #2B1B12; margin: 0 0 10px 0; font-size: 1rem; display: flex; align-items: center; width: 100%; max-width: 864px;">
            <span style="width: 3px; height: 14px; background: #C1633D; display: inline-block; margin-right: 8px;"></span>
            The Skim Read
        </h3>
        
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vS2jHDFbG3jlnFnRkahG7Zs2_LF1F2itQ7t-5erBMTzbcS4QvZ92Uj1SZcakyuyKqdChnzBNa-7KCm4/pub?embedded=true" 
                width="100%" 
                height="600px" 
                style="border: 1px solid #E8DDCC; border-radius: 12px; background: #fff; display: block; box-sizing: border-box; max-width: 864px;">
        </iframe>
    </div>

    <div style="text-align: center; padding: 20px; background: rgba(166, 80, 47, 0.03); border-radius: 16px; border: 1px dashed rgba(166, 80, 47, 0.2); margin-top: 25px;">
        <a href="https://docs.google.com/document/d/13852lqC9ja-YoqqppNCC6yUrP8dNHLnd7zygjNS0puA/preview" target="_blank" 
           style="display: inline-block; padding: 10px 20px; background: #A6502F; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 0.9rem;">
           Read Full Research Paper →
        </a>
    </div>
    `
},
        "ridemaster": {
            title: "Ridemaster Case Study",
            content: `
            <div style="width: 100%; height: 83vh; display: flex; flex-direction: column; overflow: hidden;">
                <iframe src="ridemaster-final.html" 
                        style="width: 100%; height: 100%; border: none; border-radius: 12px; background: #FFFFFF; flex-grow: 1;">
                </iframe>
            </div>
            `
        }
    };

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-button");

    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-project]');
        
        if (target) {
            const projectKey = target.getAttribute('data-project');
            
            if (projectData[projectKey]) {
                modalBody.innerHTML = projectData[projectKey].content;
                modal.style.display = "block";
                document.body.style.overflow = "hidden";

                // ── ADD THIS CONDITIONAL LOGIC HERE ──
                const modalContent = modal.querySelector('.modal-content');
                if (projectKey === 'overdraft') {
                    modalContent.style.overflowY = 'auto'; // Let long text scroll down fully
                } else {
                    modalContent.style.overflowY = 'hidden'; // Keep the iframe cleanly locked
                }
            }
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
});
