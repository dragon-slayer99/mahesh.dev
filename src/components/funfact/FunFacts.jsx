import React from "react";
import { Quote } from "lucide-react";
import "./FunFacts.css";

export default function FunFacts() {
    return (
        <section className="funfacts-section">
            <h2 class="funfacts-title">About this website</h2>
            <div className="funfacts-grid">
                {/* Card 1 */}
                <div className="funfact-card">
                    <Quote className="funfact-icon" />
                    <p className="funfact-text">
                        Rome wasn’t built in a day — neither was this website.
                    </p>
                    <span className="funfact-footer">
                        Great things take time. Craft beats rush.
                    </span>
                </div>

                {/* Card 2 */}
                <div className="funfact-card">
                    <Quote className="funfact-icon" />
                    <p className="funfact-text">
                        Made with love, not with lovable.
                    </p>
                    <span className="funfact-footer">
                        Hand-crafted UI. Zero shortcuts.
                    </span>
                </div>
            </div>
        </section>
    );
}
