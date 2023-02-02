function insertScrollNav() {
    return `
        <nav class="main-menu navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                <ul class="navigation clearfix">
                    <li><a href="/index.html">HOME</a></li>
                    <li><a href="/pages/ppp.html">PPP</a></li>
                    <li><a href="/pages/mtn.html">MTN</a></li>
                    <li><a href="/pages/strategy.html">The Strategy</a></li>
                    <li><a href="/pages/process.html">The Process</a></li>
                    <li><a href="/pages/contact.html">Contact Us</a></li>
                </ul>
            </div>
        </nav><!-- Main Menu End-->
    `;
}