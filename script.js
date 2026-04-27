window.addEventListener('DOMContentLoaded', () => {
    const projectData = {
        "overdraft": {
    title: "Overdraft in India: Why 75M Eligible Users Don't Activate",
    content: `
    <div class="modal-header" style="border-bottom: 1px solid rgba(138, 99, 255, 0.2); padding-bottom: 10px;">
        <h2 style="margin: 0; color: #fff; font-size: 1.5rem;">Overdraft in India: Why 75M Eligible Users Don't Activate</h2>
        <p style="color: #8a63ff; margin-top: 2px; font-weight: 500; font-size: 0.9rem;">A Product Discovery & Behavioral Design Case Study</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 15px 0;">
        <div style="background: rgba(138, 99, 255, 0.05); border: 1px solid rgba(138, 99, 255, 0.2); padding: 10px; border-radius: 12px; text-align: center;">
            <span style="font-size: 0.65rem; color: #aaa; text-transform: uppercase;">Estimated Active</span><br>
            <strong style="font-size: 1.1rem; color: #fff;">24M</strong>
        </div>
        <div style="background: rgba(138, 99, 255, 0.05); border: 1px solid rgba(138, 99, 255, 0.2); padding: 10px; border-radius: 12px; text-align: center;">
            <span style="font-size: 0.65rem; color: #aaa; text-transform: uppercase;">Eligible Users</span><br>
            <strong style="font-size: 1.1rem; color: #fff;">99M</strong>
        </div>
        <div style="background: rgba(138, 99, 255, 0.05); border: 1px solid rgba(138, 99, 255, 0.2); padding: 10px; border-radius: 12px; text-align: center;">
            <span style="font-size: 0.65rem; color: #aaa; text-transform: uppercase;">Market Growth</span><br>
            <strong style="font-size: 1.1rem; color: #fff;">₹3,850 Cr</strong>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
        <div style="background: #16161e; padding: 15px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05);">
            <h4 style="color: #fb923c; margin: 0 0 5px 0; font-size: 0.9rem;">The Core Problem</h4>
            <p style="font-size: 0.8rem; color: #ccc; line-height: 1.4; margin: 0;">75M eligible users don't activate OD because discovery is poorly timed and costs are uninterpretable under stress.</p>
        </div>
        <div style="background: #16161e; padding: 15px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05);">
            <h4 style="color: #4ade80; margin: 0 0 5px 0; font-size: 0.9rem;">Strategic Recommendations</h4>
            <ul style="font-size: 0.8rem; color: #ccc; line-height: 1.3; padding-left: 15px; margin: 0;">
                <li>Discovery at point-of-need (< ₹1000)</li>
                <li>Pricing in ₹ terms ("₹21 for 10 days")</li>
                <li>Repayment notifications in bank app</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="color: #fff; margin-bottom: 10px; font-size: 1rem; display: flex; align-items: center;">
            <span style="width: 3px; height: 14px; background: #8a63ff; display: inline-block; margin-right: 8px;"></span>
            The Skim Read
        </h3>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vT912VGWn1Le16bSVBIdji9-ek8QXm984kBOYCoBjnmDPyWxDOZLZUEJBOGB-_sjkYqqD8aeUfQ43Mp/pub?embedded=true" 
                width="100%" height="550px" style="border: 1px solid #333; border-radius: 12px; background: #fff;"></iframe>
    </div>

    <div style="text-align: center; padding: 20px; background: rgba(138, 99, 255, 0.03); border-radius: 16px; border: 1px dashed rgba(138, 99, 255, 0.2);">
        <a href="https://docs.google.com/document/d/13852lqC9ja-YoqqppNCC6yUrP8dNHLnd7zygjNS0puA/preview" target="_blank" 
           style="display: inline-block; padding: 10px 20px; background: #8a63ff; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 0.9rem;">
           Read Full Research Paper →
        </a>
    </div>
`
},
        "ridemaster": {
        title: "Ridemaster: Real-Time Group Awareness",
        content: `
            <div class="modal-header" style="border-bottom: 1px solid rgba(138, 99, 255, 0.2); padding-bottom: 20px;">
                <h2 style="margin: 0; color: #fff;">Ridemaster</h2>
                <p style="color: #8a63ff; margin-top: 5px; font-weight: 500;">Real-Time Group Awareness & Safety System</p>
            </div>

            <div style="margin-top: 30px; background: rgba(138, 99, 255, 0.05); padding: 20px; border-radius: 16px; border-left: 4px solid var(--accent-purple);">
                <h4 style="color: #fff; margin-top: 0;">Problem Statement</h4>
                <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">
                    Riders in groups often lose track of each other due to varying speeds and traffic, leading to 
                    <strong>"The Rubber Band Effect."</strong> Current solutions (voice calls/text) are dangerous 
                    while riding. Ridemaster provides non-intrusive awareness to keep the group connected and safe.
                </p>
            </div>

            <div style="display: flex; gap: 10px; margin: 25px 0; flex-wrap: wrap;">
                <a href="#" class="resource-btn">📄 PRD</a>
                <a href="#" class="resource-btn">🗺️ Roadmap</a>
                <a href="#" class="resource-btn">⚡ Execution Plan</a>
                <a href="#" class="resource-btn">📊 Metrics Deck</a>
            </div>

            <h4 style="color: #fff; margin-bottom: 15px;">Mobile UX Concepts</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-bottom: 30px;">
                <div class="ux-placeholder">
                    <span style="color: #444;">[Mobile UI 1]</span>
                </div>
                <div class="ux-placeholder">
                    <span style="color: #444;">[Mobile UI 2]</span>
                </div>
                <div class="ux-placeholder">
                    <span style="color: #444;">[Mobile UI 3]</span>
                </div>
            </div>
        `
    }
    };

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-button");

    document.addEventListener('click', (e) => {
        // Look for any element with a data-project attribute (Overdraft OR Ridemaster)
        const target = e.target.closest('[data-project]');
        
        if (target) {
            // Get the key (e.g., "overdraft" or "ridemaster") from the HTML attribute
            const projectKey = target.getAttribute('data-project');
            
            // Check if we actually have data for this key in our script
            if (projectData[projectKey]) {
                modalBody.innerHTML = projectData[projectKey].content;
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };
});
