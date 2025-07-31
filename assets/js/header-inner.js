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
                document.getElementById("header-data").innerHTML = `
        <header class="main-header">
            <!--Header-Upper-->
            <div class="header-upper black-120-bg">
                <div class="container clearfix">
                    <div class="header-inner rel d-flex align-items-center">
                        <div class="logo-outer">
                            <div class="logo"><a href="index-light.html"><img src="assets/images/logo.svg" height="100"
                                        width="150" alt="Logo" title="Logo"></a></div>
                        </div>

                        <div class="nav-outer ms-auto clearfix">
                            <!-- Main Menu -->
                            <nav class="main-menu navbar-expand-lg">
                                <div class="navbar-header py-10">
                                    <div class="mobile-logo">
                                        <a href="index-light.html">
                                            <img src="assets/images/logo.svg" height="50" width="100" alt="Logo"
                                                title="Logo">
                                        </a>
                                    </div>

                                    <!-- Toggle Button -->
                                    <button type="button" class="navbar-toggle" data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="navbar-collapse collapse clearfix">
                                    <ul class="navigation clearfix">
                                        <li class=""><a href="index-light.html">Home</a>
                                        </li>
                                        <li class="dropdown"><a href="#">Products</a>
                                            <ul>
                                                <li class="dropdown1"><img src="./assets/images/Mint1.webp" alt=""><a href="product-details.html?doc=wooden-blinds">WOODEN BLINDS</a>
                                                </li>
                                                <li class="dropdown1"><img src="./assets/images/Mint1.webp" alt=""><a href="product-details.html?doc=honeycomb-blinds">HONEYCOMB BLINDS</a></li>
                                                <li class="dropdown1"><img src="./assets/images/Mint1.webp" alt=""><a href="product-details.html?doc=shangrila-blinds ">SHANGRI-LA
                                                        BLINDS</a></li>
                                                <li class="dropdown1"><img src="./assets/images/Mint1.webp" alt=""><a href="product-details.html?doc=zebra-blinds">ZEBRA BLINDS</a>
                                                </li>
                                                <li><a href="product-details.html?doc=screen-blinds">SCREEN BLINDS</a>
                                                </li>
                                                <li><a href="product-details.html?doc=blackout-blinds">BLACKOUT
                                                        BLINDS</a></li>
                                                <li><a href="product-details.html?doc=translucent-blinds">TRANSLUCENT
                                                        BLINDS </a></li>
                                                <li><a href="product-details.html?doc=romanstyle-blinds">ROMAN STYLE
                                                        BLINDS</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-light.html">About</a></li>
                                        <li class=""><a href="blogs.html">blog</a>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>

                            </nav>
                            <!-- Main Menu End-->
                        </div>
                    </div>
                    <form class="search-project search-form mt-96" id="project-search" action="#">
                        <input type="search" required placeholder="Type to search...">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
            <!--End Header Upper-->
        </header>
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
