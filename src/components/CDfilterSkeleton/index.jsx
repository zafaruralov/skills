const CDfilterSkeleton = () => {
  return (
    <div className="cdfilter-skeleton">
      <section className="cdfilter-skeleton-section">
        <div className="container cdfilter-skeleton-gap">
          <div className="cdfilter-skeleton-filter">
            <div className="cdfilter-skeleton-filter__choosen">
              <div className="cdfilter-skeleton-filter__choosen-navbar">
                <div className="cdfilter-skeleton-filter__choosen-actions">
                  <div className="cdfilter-skeleton-filter__choosen-button"></div>
                  <div className="cdfilter-skeleton-filter__choosen-button"></div>
                  <div className="cdfilter-skeleton-filter__choosen-button"></div>
                </div>
              </div>
            </div>
            <div className="cdfilter-skeleton-filter__items">
              <div className="cdfilter-skeleton-filter__item">
                <div className="cdfilter-skeleton-filter__navbar">
                  <div className="cdfilter-skeleton-filter__body">
                    <div className="cdfilter-skeleton-filter__body-checkbox">
                      <label className="cdfilter-skeleton-filter__body-label">{/* <input type="checkbox" /> */}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cdfilter-skeleton-filter__salery">
              <div className="cdfilter-skeleton-filter__navbar"></div>
              <div className="cdfilter-skeleton-filter__salery-wrapper">
                <div className="cdfilter-skeleton-filter__salery-container">
                  {/* <input type="range" min="0" max="10000000" step="100000" /> */}
                  {/* <input type="range" min="0" max="10000000" step="100000" /> */}
                  <div className="cdfilter-skeleton-filter__salery-track"></div>
                </div>
                <div className="cdfilter-skeleton-filter__salery-values">
                  <h2 className="cdfilter-skeleton-filter__salery-text"></h2>
                  <h2 className="cdfilter-skeleton-filter__salery-text"></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="cdfilter-skeleton-wrapper">
            <div className="cdfilter-skeleton-search">
              <label className="cdfilter-skeleton-name">
                {/* <input className="cdfilter-skeleton-search__field" required placeholder="Search candidates" /> */}
              </label>
            </div>
            <div className="cdfilter-skeleton-content">
              <div className="cdfilter-skeleton-content__section">
                <div className="cdfilter-skeleton-content__section-navbar">
                  <div className="cdfilter-skeleton-content__section-navbar-wrapper">
                    <div className="cdfilter-skeleton-content__section-navbar-info">
                      <div className="cdfilter-skeleton-content__section-navbar-name"></div>
                    </div>
                  </div>
                  <div className="cdfilter-skeleton-content__section-navbar-price"></div>
                </div>
                <div className="cdfilter-skeleton-content__section-actions"></div>
              </div>
              <div className="cdfilter-skeleton-content__section">
                <div className="cdfilter-skeleton-content__section-navbar">
                  <div className="cdfilter-skeleton-content__section-navbar-wrapper">
                    <div className="cdfilter-skeleton-content__section-navbar-info"></div>
                  </div>
                  <div className="cdfilter-skeleton-content__section-navbar-price"></div>
                </div>
                <div className="cdfilter-skeleton-content__section-actions"></div>
              </div>
              <div className="cdfilter-skeleton-content__section">
                <div className="cdfilter-skeleton-content__section-navbar">
                  <div className="cdfilter-skeleton-content__section-navbar-wrapper">
                    <div className="cdfilter-skeleton-content__section-navbar-info"></div>
                  </div>
                  <div className="cdfilter-skeleton-content__section-navbar-price"></div>
                </div>
                <div className="cdfilter-skeleton-content__section-actions"></div>
              </div>
              <div className="cdfilter-skeleton-content__section">
                <div className="cdfilter-skeleton-content__section-navbar">
                  <div className="cdfilter-skeleton-content__section-navbar-wrapper">
                    <div className="cdfilter-skeleton-content__section-navbar-info"></div>
                  </div>
                  <div className="cdfilter-skeleton-content__section-navbar-price"></div>
                </div>
                <div className="cdfilter-skeleton-content__section-actions"></div>
              </div>
              <div className="cdfilter-skeleton-content__section">
                <div className="cdfilter-skeleton-content__section-navbar">
                  <div className="cdfilter-skeleton-content__section-navbar-wrapper">
                    <div className="cdfilter-skeleton-content__section-navbar-info"></div>
                  </div>
                  <div className="cdfilter-skeleton-content__section-navbar-price"></div>
                </div>
                <div className="cdfilter-skeleton-content__section-actions"></div>
              </div>
            </div>
            <div className="cdfilter-skeleton-pagination">
              <ul className="cdfilter-skeleton-pagination__page">
                <button className="cdfilter-skeleton-pagination__page-button"></button>
                <li className="cdfilter-skeleton-pagination__page-empty"></li>
                <li className="cdfilter-skeleton-pagination__page-number"></li>
                <li className="cdfilter-skeleton-pagination__page-button"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CDfilterSkeleton;
