const template = document.createElement('template');
template.innerHTML = `
        <div class="header">
            <ul class="title-content-list">
                <li><div class="title"><a href="https://reedcoffey.github.io/">Reed Coffey Art</a></div>
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
                        <a href="etsy">Store</a></div></li>
                    </div>
             </ul>
        </div

    `
    document.body.appendChild(template.content);