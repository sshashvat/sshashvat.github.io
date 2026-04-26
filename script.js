window.addEventListener('DOMContentLoaded', () => {
    const projectData = {
        "overdraft": {
            title: "Overdraft in India: The ₹3,850 Cr Activation Gap",
           content: `
    <div class="modal-header" style="border-bottom: 1px solid rgba(138, 99, 255, 0.2); padding-bottom: 20px;">
        <h2 style="margin: 0; color: #fff;">Overdraft in India: The ₹3,850 Cr Activation Gap</h2>
        <p style="color: #8a63ff; margin-top: 5px; font-weight: 500;">Strategic PM Recommendations & Behavioral Deep-Dive</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 30px 0;">
        <div style="background: rgba(138, 99, 255, 0.1); border: 1px solid rgba(138, 99, 255, 0.2); padding: 15px; border-radius: 16px; text-align: center;">
            <span style="font-size: 0.8rem; color: #aaa; text-transform: uppercase;">User Gap</span><br>
            <strong style="font-size: 1.5rem; color: #fff;">75 Million</strong>
        </div>
        <div style="background: rgba(138, 99, 255, 0.1); border: 1px solid rgba(138, 99, 255, 0.2); padding: 15px; border-radius: 16px; text-align: center;">
            <span style="font-size: 0.8rem; color: #aaa; text-transform: uppercase;">Untapped Rev</span><br>
            <strong style="font-size: 1.5rem; color: #fff;">₹3,850 Cr</strong>
        </div>
        <div style="background: rgba(138, 99, 255, 0.1); border: 1px solid rgba(138, 99, 255, 0.2); padding: 15px; border-radius: 16px; text-align: center;">
            <span style="font-size: 0.8rem; color: #aaa; text-transform: uppercase;">Gig Segment</span><br>
            <strong style="font-size: 1.5rem; color: #fff;">50 Million</strong>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
        <div style="background: #16161e; padding: 20px; border-radius: 16px; border: 1px solid #222;">
            <h4 style="color: #8a63ff; margin-top: 0;">Point-of-Need Discovery</h4>
            <p style="font-size: 0.9rem; color: #ccc;">Trigger activation nudges when balance drops < ₹500, converting users at the exact moment of liquidity stress.</p>
        </div>
        <div style="background: #16161e; padding: 20px; border-radius: 16px; border: 1px solid #222;">
            <h4 style="color: #8a63ff; margin-top: 0;">Actionable Pricing</h4>
            <p style="font-size: 0.9rem; color: #ccc;">Replace abstract "15% p.a." with clear cost disclosure like "₹21 for 10 days" to fix user interpretability barriers.</p>
        </div>
    </div>

    <h3 style="color: #fff; margin-bottom: 15px;">Full Deep-Dive Analysis</h3>
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vT912VGWn1Le16bSVBIdji9-ek8QXm984kBOYCoBjnmDPyWxDOZLZUEJBOGB-_sjkYqqD8aeUfQ43Mp/pub?embedded=true" 
            width="100%" height="600px" style="border: 1px solid #333; border-radius: 16px; background: #fff;"></iframe>
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
