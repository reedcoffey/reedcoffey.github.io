document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", `
    
    <div class="ignore-on-mobile">
      <div class="header">
        <ul class="title-content-list">
          <li>
            <div class="title"><a href="https://reedcoffey.github.io/">Reed Coffey Art</a></div>
            <div class="content">
              <div class="dropdown">
                <button class="dropbtn"><a href="oilnav.html">Oil Paintings</a></button>
                <div class="dropdown-content">
                  <a href="recent_work.html">Recent Work</a>
                  <a href="agaves.html">Agave Studies</a>
                  <a href="explorations.html">Explorations</a>
                </div>
              </div>
              <a href="other_mediums.html">Other Mediums</a>
              <a href="available.html">Available Works</a>
              <a href="https://bsky.app/profile/throughthereeds.bsky.social">Bluesky</a>
              <a href="etsy">Store</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="ignore-on-desktop">
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <div class="topnav">
        <a href="index.html" class="active" style="font-size:50px">RC Art</a>
        <div id="myLinks" style="display:none;">
          <a href="recent_work.html">Recent Work</a>
          <a href="agaves.html">Agave Studies</a>
          <a href="explorations.html">Explorations</a>
          <a href="other_mediums.html">Other Mediums</a>
          <a href="etsy">Store</a>
        </div>
        <a href="javascript:void(0);" class="icon" id="hamburger-toggle">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  `);
});
