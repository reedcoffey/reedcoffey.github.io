document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", `
    

<a href="index.html" class="site-title-link">
  <h1 class="site-title">REED COFFEY</h1>
</a>
      <div class="header">
        <div class="center">
        <ul class="title-content-list"style="text-align: center;" >
          <li>
            <div class="content">
              <div class="dropdown" style="z-index:11">
                <a href="oilnav.html" class="dropbtn">Oil Paintings</a>
                <div class="dropdown-content">
                  <a href="recent_work.html">Recent Work</a>
                  <a href="agaves.html">Agave Studies</a>
                  <a href="explorations.html">Explorations</a>
                </div>
              </div>
              <a href="other_mediums.html">Other Mediums</a>
              <a href="../about.html">About</a>
              <a href="../blognav.html">Studio Notes</a>
              <a href="https://bsky.app/profile/throughthereeds.bsky.social">Bluesky</a>
            </div>
          </li>
        </ul></div>
      </div>
  `);
});
