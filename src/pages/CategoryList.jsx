import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <>
      <div className="page-wrapeer">
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage: 'url("assets/images/page-header-bg.jpg")',
            }}
          ></div>
          {/* End .page-header */}
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-nav breadcrumb-with-filter"
          >
            <div className="container"></div>
            {/* End .container-fluid */}
          </nav>
          {/* End .breadcrumb-nav */}
          <div className="page-content">
            <div className="categories-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="banner banner-cat banner-badge">
                          <Link to="/productlist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-1.jpg"
                              alt=""
                            />
                          </Link>
                          <span className="banner-link">
                            <h3 className="banner-title">Category name</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">2 Products</h4>
                            {/* End .banner-subtitle */}
                            <Link
                              className="banner-link-text"
                              to="/productlist"
                            >
                              See Alls
                            </Link>
                          </span>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-sm-8 */}
                      <div className="col-sm-4">
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-2.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">Jeans</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">1 Product</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-sm-4 */}
                      <div className="col-sm-4">
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-3.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">Sportwear</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">0 Product</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-sm-4 */}
                      <div className="col-sm-8">
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-4.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">Bags</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">4 Products</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-sm-8 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .col-lg-6 */}
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-5.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">Dresses</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">3 Products</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-6.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">Shoes</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">2 Products</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-sm-8 */}
                      <div className="col-sm-4">
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-7.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">T-shirts</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">0 Products</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                        <div className="banner banner-cat banner-badge">
                          <a href="categorylist">
                            <img
                              src="assets/images/category/fullwidth-page/banner-8.jpg"
                              alt=""
                            />
                          </a>
                          <a className="banner-link" href="categorylist">
                            <h3 className="banner-title">Jumpers</h3>
                            {/* End .banner-title */}
                            <h4 className="banner-subtitle">1 Product</h4>
                            {/* End .banner-subtitle */}
                            <span className="banner-link-text">Shop Now</span>
                          </a>
                          {/* End .banner-link */}
                        </div>
                        {/* End .banner */}
                      </div>
                      {/* End .col-sm-4 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .col-lg-6 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container-fluid */}
            </div>
            {/* End .categories-page */}
            <div className="sidebar-filter-overlay" />
            {/* End .sidebar-filter-overlay */}
            <aside className="sidebar-shop sidebar-filter sidebar-filter-banner">
              <div className="sidebar-filter-wrapper">
                <div className="widget widget-clean">
                  <label>
                    <i className="icon-close" />
                    Filters
                  </label>
                  <a href="/" className="sidebar-filter-clear">
                    Clean All
                  </a>
                </div>
                <div className="widget">
                  <h3 className="widget-title">Browse Category</h3>
                  {/* End .widget-title */}
                  <div className="widget-body">
                    <div className="filter-items filter-items-count">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-1"
                          >
                            Women
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">3</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-2"
                          >
                            Men
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">0</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-3"
                          >
                            Holiday Shop
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">0</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-4"
                          >
                            Gifts
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">0</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-5"
                          >
                            Homeware
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">0</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-6"
                            defaultChecked="checked"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cat-6"
                          >
                            Grid Categories Fullwidth
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <span className="item-count">13</span>
                      </div>
                      {/* End .filter-item */}
                      <div className="sub-filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-7"
                            >
                              Dresses
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">3</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-8"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-8"
                            >
                              T-shirts
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-9"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-9"
                            >
                              Bags
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">4</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-10"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-10"
                            >
                              Jackets
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">2</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-11"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-11"
                            >
                              Shoes
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">2</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-12"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-12"
                            >
                              Jumpers
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">1</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-13"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-13"
                            >
                              Jeans
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">1</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-14"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-14"
                            >
                              Sportwear
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .sub-filter-items */}
                    </div>
                    {/* End .filter-items */}
                  </div>
                  {/* End .widget-body */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .sidebar-filter-wrapper */}
            </aside>
            {/* End .sidebar-filter */}
          </div>
          {/* End .page-content */}
        </main>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu-overlay" />
      {/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <nav className="mobile-nav mt-5">
            <ul className="mobile-menu">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="productlist">Product</a>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Media
                </a>
                <ul>
                  <li>
                    <a href="blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="gallery">Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="aboutus">About Us</a>
              </li>
              <li>
                <a href="contactus">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* End .mobile-nav */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a
              href="https://www.twitter.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <i className="icon-twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Youtube"
            >
              <i className="icon-youtube" />
            </a>
          </div>
          {/* End .social-icons */}
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
    </>
  );
};

export default CategoryList;
