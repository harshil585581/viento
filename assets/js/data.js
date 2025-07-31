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

        document.title = `VIENTO BLINDS | ${doc.name}`;

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

                document.title = `Viento Blinds | ${doc.name}`;

                // Your existing template code here...
                document.getElementById("doc-container").innerHTML = `
                    <section class="banner-area pt-324 pb-250"
            style="background-image: url(assets/images/project-details/banner-2.jpg);">
            <div class="container text-center">
                <div class="row align-items-center justify-content-between">
                    <div class="banner-content wow fadeInUp delay-0-2s">
                        <h1>${doc.name}</h1>
                        <div class="mt-32">
                            <ul class="breadcrumb wow fadeInUp delay-0-4s">
                                <li class="breadcrumb-item"><a href="index-light.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="index-light.html">Products</a></li>
                                <li class="breadcrumb-item">${doc.name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner Section End -->

        <!-- Architecture Projects Area start -->
        <section class="project-details-02 py-128">
            <div class="container">
                <div class="row detail-images align-items-center mb-64 wow fadeInLeft delay-0-1s">
                    <div class="col-xs-12 carousel slide" id="detailCarousel" data-bs-ride="carousel">
                        <div class="carousel-buttons">
                            <button class="prev" type="button" data-bs-target="#detailCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"><i
                                        class="fa fa-long-arrow-left"></i></span>
                            </button>
                            <button class="" type="button" data-bs-target="#detailCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"><i
                                        class="fa fa-long-arrow-right"></i></span>
                            </button>
                        </div>
                        <div class="row carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <img src="${doc.img1}" alt="project">
                            </div>
                            <div class="carousel-item">
                                <img src="${doc.img2}" alt="project">
                            </div>
                            <div class="carousel-item">
                                <img src="${doc.img3}" alt="project">
                            </div>
                            <div class="carousel-item">
                                <img src="${doc.img4}" alt="project">
                            </div>
                        </div>
                        <div class="col-xs-12 carousel-indicators">
                            <div class="row carousel-list-images gap-30">
                                <div class="col-md-3 col-lg-3 button-img">
                                    <button type="button" data-bs-target="#detailCarousel" data-bs-slide-to="0"
                                        class="active" aria-current="true" aria-label="Slide 1">
                                        <img src="${doc.img1}" alt="project">
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-3 button-img">
                                    <button type="button" data-bs-target="#detailCarousel" data-bs-slide-to="1"
                                        aria-label="Slide 2">
                                        <img src="${doc.img2}" alt="project">
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-3 button-img">
                                    <button type="button" data-bs-target="#detailCarousel" data-bs-slide-to="2"
                                        aria-label="Slide 3">
                                        <img src="${doc.img3}" alt="project">
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-3 button-img">
                                    <button type="button" data-bs-target="#detailCarousel" data-bs-slide-to="3"
                                        aria-label="Slide 4">
                                        <img src="${doc.img4}" alt="project">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-info wow fadeInLeft delay-0-1s">
                    <div class="col-lg">
                        <h2 class="mb-16">${doc.name}</h2>
                        <p>${doc.description}
                        </p>
                        <div class="row mt-64 wow fadeInLeft delay-0-1s">
                            <div class="col-lg-6 text-left">
                                <div class="faq-item">
                                    <button class="faq-question">
                                        ${doc.profile_t}
                                        <span class="arrow">+</span>
                                    </button>
                                    <div class="faq-answer" >
                                        ${doc.profiles}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 text-right">
                                <div class="faq-item">
                                    <button class="faq-question ">
                                        ${doc.materials_t}
                                        <span class="arrow">+</span>
                                    </button>
                                    <div class="faq-answer" >
                                        ${doc.materials}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row wow fadeInLeft delay-0-1s">
                            <div class="col-lg-6 text-left">
                                <div class="faq-item">
                                    <button class="faq-question ">
                                        ${doc.features_t}
                                        <span class="arrow">+</span>
                                    </button>
                                    <div class="faq-answer">
                                        ${doc.features}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 text-right">
                                <div class="faq-item">
                                    <button class="faq-question">
                                        ${doc.ideal_t}
                                        <span class="arrow">+</span>
                                    </button>
                                    <div class="faq-answer">
                                        ${doc.ideal_for}
                                    </div>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
                <h6 class="mt-64" style="font-weight: bold;">Note:</h6>
                <p >${doc.operation}</p>
            </div>
        </section>
        <!-- Architecture Projects Area end -->

        <!-- Related Projects Area start -->
        <section class="related-projects py-128 black-10-bg">
            <div class="container">
                <div class="content align-items-center">
                    <div class="row mb-64 wow fadeInLeft delay-0-1s">
                        <a class="prev-pro" href="project-details-light.html">
                            <i class="fa fa-long-arrow-left"></i> PREV
                        </a>
                        <a href="projects-01-light.html"><i class="fa fa-table"></i></a>
                        <a class="next-pro" href="project-details-light.html">
                            NEXT <i class="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                    <div class="row wow fadeInLeft delay-0-1s">
                        <div class="col-lg-6 related-left">
                            <div class="row black-100-bg">
                                <div class="col-xs-12 col-sm-6  col-lg-6">
                                    <a href="${doc.id1}"><img
                                            src="${doc.img5}" alt="Apartment"></a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-6 related-text">
                                    <a href="${doc.id1}">
                                        <h5 class="mb-16">${doc.m1}</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 related-right">
                            <div class="row white-bg ">
                                <div class="col-xs-12 col-sm-6 col-lg-6 related-text">
                                    <a href="${doc.id2}">
                                        <h5 class="mb-16">${doc.m2}</h5>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-6">
                                    <a href="project-details-light.html"><img
                                            src="${doc.img6}" alt="Apartment"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
