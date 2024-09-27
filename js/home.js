'use strict';

//Services section

let serviceContainers;

const serviceDisplayFunc = () => {
  serviceContainers = Array.from(document.querySelectorAll('.tab-pane'));
  if (window.innerWidth > 900) {
    serviceContainers.map(
      (serviceContainer) => (serviceContainer.style.flexDirection = 'row')
    );
  } else {
    serviceContainers.map(
      (serviceContainer) => (serviceContainer.style.flexDirection = 'column')
    );
  }
};

serviceDisplayFunc();
window.addEventListener('resize', serviceDisplayFunc);

//Licence section for diferent sizes.
const licensesContainer = document.getElementById('licenses');

const licensesDisplayFunc = () => {
  if (window.innerWidth < 900) {
    licensesContainer.innerHTML = `
     <div class="col">
          <h2 class="section-title">
            Different Training Courses and Certificates
          </h2>
          <ul
            class="nav nav-pills nav-fill"
            id="pills-tab-licenses"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-license-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-license"
                type="button"
                role="tab"
                aria-controls="pills-license"
                aria-selected="true"
              >
                <i class="license-icon"></i>
                <span>Introduction</span>
              </button>
            </li>
            <li class="nav-item d-flex align-items-center" role="presentation">
              <button
                class="nav-link"
                id="pills-insurance-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-insurance"
                type="button"
                role="tab"
                aria-controls="pills-insurance"
                aria-selected="true"
              >
                <i class="license-icon"></i>
                <span>Interiors</span>
              </button>
            </li>
            <li class="nav-item d-flex align-items-center" role="presentation">
              <button
                class="nav-link"
                id="pills-bonded-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-bonded"
                type="button"
                role="tab"
                aria-controls="pills-bonded"
                aria-selected="true"
              >
                <i class="license-icon"></i>
                <span>Exterior</span>
              </button>
            </li>
          </ul>
          <div class="tab-content bg-white" id="pills-tabContent-licenses">
            <div
              class="tab-pane fade show active"
              id="pills-license"
              role="tabpanel"
              aria-labelledby="pills-license-tab"
            >
              <div class="description">
              <h5>Basic Introduction</h5>
                <p>
                  In our Introduction to the painting trade, the Trade Best
                  Practice series provides a complete introduction by shedding a
                  light on career opportunities as well as the basic skills and
                  safety equipment needed. Hear from tradespeople working in the
                  field as well as operations personnel at larger firms.
                </p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-insurance"
              role="tabpanel"
              aria-labelledby="pills-insurance-tab"
            >
              <div class="description">
                <h5>Level 1-3</h5>
                <p>
                  The Interior series is designed to immerse you into every step
                  of preparing and performing painting skills. Each topic gives
                  an in-depth look at how to perform the skill according to
                  tried and true operating procedures. Each level is designed to
                  meet the training needs of the painter as they progress in
                  their abilities. Each course comes with supplemental and
                  printable resources and a certificate of completion.
                </p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-bonded"
              role="tabpanel"
              aria-labelledby="pills-bonded-tab"
            >
              <div class="description">
                <h5>Level 1-3</h5>
                <p>
                  The Exterior series is designed to immerse you into every step
                  of preparing and performing painting skills. Each topic gives
                  an in-depth look at how to perform the skill according to
                  tried and true operating procedures. In addition, the series
                  explains "why" each step is necessary. Each course comes with
                  supplemental and printable resources and a certificate of
                  completion.
                </p>
              </div>
            </div>
          </div>
        </div>
  `;
  } else {
    licensesContainer.innerHTML = `
    <div class="col">
          <h2 class="section-title">
            Different Training Courses and Certificates
          </h2>
          <ul
            class="nav nav-pills nav-fill"
            id="pills-tab-licenses"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-license-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-license"
                type="button"
                role="tab"
                aria-controls="pills-license"
                aria-selected="true"
              >
                <i class="license-icon"></i>
                <span>Introduction</span>
              </button>
            </li>
            <li class="nav-item d-flex align-items-center" role="presentation">
              <button
                class="nav-link"
                id="pills-insurance-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-insurance"
                type="button"
                role="tab"
                aria-controls="pills-insurance"
                aria-selected="true"
              >
                <i class="license-icon"></i>
                <span>Interiors</span>
              </button>
            </li>
            <li class="nav-item d-flex align-items-center" role="presentation">
              <button
                class="nav-link"
                id="pills-bonded-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-bonded"
                type="button"
                role="tab"
                aria-controls="pills-bonded"
                aria-selected="true"
              >
                <i class="license-icon"></i>
                <span>Exterior</span>
              </button>
            </li>
          </ul>
          <div class="tab-content bg-white" id="pills-tabContent-licenses">
            <div
              class="tab-pane fade show active"
              id="pills-license"
              role="tabpanel"
              aria-labelledby="pills-license-tab"
            >
              <div class="description">
              <h5>Basic Introduction</h5>
                <p>
                  In our Introduction to the painting trade, the Trade Best
                  Practice series provides a complete introduction by shedding a
                  light on career opportunities as well as the basic skills and
                  safety equipment needed. Hear from tradespeople working in the
                  field as well as operations personnel at larger firms.
                </p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-insurance"
              role="tabpanel"
              aria-labelledby="pills-insurance-tab"
            >
              <div class="description">
                <h5>Level 1-3</h5>
                <p>
                  The Interior series is designed to immerse you into every step
                  of preparing and performing painting skills. Each topic gives
                  an in-depth look at how to perform the skill according to
                  tried and true operating procedures. Each level is designed to
                  meet the training needs of the painter as they progress in
                  their abilities. Each course comes with supplemental and
                  printable resources and a certificate of completion.
                </p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-bonded"
              role="tabpanel"
              aria-labelledby="pills-bonded-tab"
            >
              <div class="description">
                <h5>Level 1-3</h5>
                <p>
                  The Exterior series is designed to immerse you into every step
                  of preparing and performing painting skills. Each topic gives
                  an in-depth look at how to perform the skill according to
                  tried and true operating procedures. In addition, the series
                  explains "why" each step is necessary. Each course comes with
                  supplemental and printable resources and a certificate of
                  completion.
                </p>
              </div>
            </div>
          </div>
        </div>
    `;
  }
};

window.onload = licensesDisplayFunc;

window.addEventListener('resize', licensesDisplayFunc);
