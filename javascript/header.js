document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", `
    

<a href="index.html" style="text-decoration: none;">
  <p style="text-align: center; font-size: 40pt; color: #53784F;">
    REED COFFEY
  </p>
</a>
      <div class="header">
        <div class="center">
        <ul class="title-content-list"style="text-align: center;" >
          <li>
            <div class="content">
              <div class="dropdown" style="z-index:11">
                <button class="dropbtn"><a href="oilnav.html">Oil Paintings</a></button>
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
