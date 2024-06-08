// Features.jsx
export default function Features() {
    return (
        <div className="features--section--content">
            <div id="top-border"></div>
            <div className="container">
                <div className="features--section">
                    <div className="feature-item">
                        <img src="./img/icon-access-anywhere.svg" alt="icon-access-anywhere" style={{ width: '13%' }} />
                        <h2>Access your files, anywhere</h2>
                        <p>The ability to use a smartphone, tablet, or computer to access your account means your 
                            files follow you everywhere.</p>
                    </div>
                    <div className="feature-item">
                        <img src="./img/icon-security.svg" alt="icon-security" style={{ width: '13%' }} />
                        <h2>Security you can trust</h2>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security 
                            features we allow to help secure your files.</p>
                    </div>
                    <div className="feature-item">
                        <img src="./img/icon-collaboration.svg" alt="icon-collaboration" style={{ width: '13%' }} />
                        <h2>Real-time collaboration</h2>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
                            No email attachments required.</p>
                    </div>
                    <div className="feature-item">
                        <img src="./img/icon-any-file.svg" alt="icon-any-file" style={{ width: '13%' }} />
                        <h2>Store any type of file</h2>
                        <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                            file types to be securely stored and shared.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
