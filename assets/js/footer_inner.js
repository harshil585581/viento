async function loadDocumentPage() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("doc");

    try {
        const response = await fetch("data/blinds.json");
        const documents = await response.json();

        const doc = documents.find((d) => d.slug === slug);

        if (!doc) {
            document.getElementById(
                "doc-container"
            ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
            return;
        }


        // Your existing template code here...
        async function loadDocumentPage() {
            const params = new URLSearchParams(window.location.search);
            const slug = params.get("doc");

            try {
                const response = await fetch("data/blinds.json");
                const documents = await response.json();

                const doc = documents.find((d) => d.slug === slug);

                if (!doc) {
                    document.getElementById(
                        "doc-container"
                    ).innerHTML = `<p class="not-found">⚠️ Document not found.</p>`;
                    return;
                }


                // Your existing template code here...
                document.getElementById("footer-doc").innerHTML = `
        <footer class="main-footer py-128 black-120-bg">
            <div class="footer-top mb-96">
                <div class="container">
                    <div class="col-lg-10">
                        <h2>Premium <span class="white">blinds</span> for <span class="white">light control</span> & <span class="white">privacy</span>. <span class="white">Trusted</span> worldwide.</h2>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="copyright-area col-sm-12 col-md-4 col-lg-6">
                            <img src="assets/images/logo.svg" alt="Footer Logo" class="" style="height: 80px; width: auto;">
                            <!-- © Copyright INDOCHINE 2024. All rights reserved. -->
                        </div>

                        <div class="col-xs-12 col-sm-8 col-md-4 col-lg-3">
                            <div class="footer-bottom-text">
                                <div class="d-flex content">
                                    <div class="left" >
                                        <h4 class="h4-rotate">CONTACT</h4>
                                    </div>
                                    <div class="right info">
                                        <p>No. 70/4, 1ST FLOOR, 2ND MAIN, 3rd CROSS, Bannerghatta Rd, NS Palya,
                                            Bengaluru, Karnataka 560076</p>
                                        <p><a href="callto:+919481491477">+919481491477</a></p>
                                        <p><a href="mailto:vientodecor@gmail.com">vientodecor@gmail.com</a></p>
                                        <div class="footer-social">
                                            <span>Socials:</span>
                                            <a href="#"><i class="fab fa-dribbble"></i></a>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                            <a href="#"><i class="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12  col-sm-4 col-md-3 col-lg-2">
                            <div class="footer-bottom-text">
                                <div class="d-flex content">
                                    <div class="left">
                                        <h4 class="h4-rotate key-link">LINKS</h4>
                                    </div>
                                    <ul class="right links">
                                        <li><a class="" href="index.html">Home</a></li>
                                        <li><a class="" href="about.html">About</a></li>
                                        <li><a class="" href="product-details.html">Products</a></li>
                                        <li><a class="" href="blogs.html">Blog</a></li>
                                        <li><a class="" href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="sm-none col-md-1 col-lg-1">
                            <div class="footer-bottom-text text-white">
                                <a class="to-top scroll-to-target content" data-target="html">
                                    <p>TO TOP</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
                `;

                setupDropdownButtons();
            } catch (error) {

                document.getElementById(
                    "doc-container"
                ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
            }
        }


        loadDocumentPage();
        setupDropdownButtons();

    } catch (error) {

        document.getElementById(
            "doc-container"
        ).innerHTML = `<p class="not-found">⚠️ Error loading document.</p>`;
    }
}

// Initialize when document is ready
loadDocumentPage();
