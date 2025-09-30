export function generateFooter() {
  const footerHTML = `

    <div class="container">
      <div class="wrapper">
        <div class="col">
          <a href="index.html"><img src="/tiamonds.svg" alt="logo" loading="lazy"></a>
          <p>
            Our exclusive glasses are specifically tailored to enhance the elegance of women with lower nose bridges
            and distinct cheekbones. We create high-end glasses that not only look lavish but also feel magnificent.
            We are driven by the belief that every woman should have the opportunity to feel stunning.
          </p>
        </div>
        <div class="col">
          <h5>Menu</h5>
          <a href="index.html" class="m-flip js-flip"><span class="m-flip_item">Home</span><span class="m-flip_item">Home</span></a>
          <a href="about.html" class="m-flip js-flip"><span class="m-flip_item">About</span><span class="m-flip_item">About</span></a>
          <a href="sunglasses.html" class="m-flip js-flip"><span class="m-flip_item">Sunglasses</span><span class="m-flip_item">Sunglasses</span></a>
          <a href="gold.html" class="m-flip js-flip"><span class="m-flip_item">Gold</span><span class="m-flip_item">Gold</span></a>
          <a href="silver.html" class="m-flip js-flip"><span class="m-flip_item">Silver</span><span class="m-flip_item">Silver</span></a>
          <a href="platinum.html" class="m-flip js-flip"><span class="m-flip_item">Platinum</span><span class="m-flip_item">Platinum</span></a>
          <a href="contact.html" class="m-flip js-flip"><span class="m-flip_item">Contact us</span><span class="m-flip_item">Contact us</span></a>
          <a href="signIn.html" class="m-flip js-flip"><span class="m-flip_item">Sign in</span><span class="m-flip_item">Sign in</span></a>
          <a href="signUp.html" class="m-flip js-flip"><span class="m-flip_item">Sign up</span><span class="m-flip_item">Sign up</span></a>
        </div>
        <div class="col">
          <h5>Policy</h5>
          <a href="privacypolicy.html" class="m-flip js-flip"><span class="m-flip_item">Privacy Policy</span><span class="m-flip_item">Privacy Policy</span></a>
          <a href="refundpolicy.html" class="m-flip js-flip"><span class="m-flip_item">Refund Policy</span><span class="m-flip_item">Refund Policy</span></a>
          <a href="shippingpolicy.html" class="m-flip js-flip"><span class="m-flip_item">Shipping Policy</span><span class="m-flip_item">Shipping Policy</span></a>
          <a href="termsofservice.html" class="m-flip js-flip"><span class="m-flip_item">Terms of Service</span><span class="m-flip_item">Terms of Service</span></a>
        </div>
        <div class="col">
          <p>Get $20 off your first purchase by subscribing to our newsletter</p>
          <form action="">
            <input type="email" name="email" placeholder="Enter your email to subscribe" required>
            <input type="submit" value="Subscribe">
          </form>
        </div>
      </div>
      <div class="copyrights">
        <p>© 2024 - Tiamonds</p>
        <div class="payment">
          <i class="fa-brands fa-amazon"></i>
          <i class="fa-brands fa-google-pay"></i>
          <i class="fa-brands fa-cc-paypal"></i>
          <i class="fa-brands fa-apple-pay"></i>
          <i class="fa-brands fa-meta"></i>
          <i class="fa-brands fa-cc-visa"></i>
        </div>
      </div>
    </div>

  `;

  document.querySelector('footer').innerHTML = footerHTML;
}