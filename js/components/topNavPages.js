function insertTopNavPages() {
    return `
        <!-- Main Menu -->
        <nav class="main-menu navbar-expand-md">
            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                    <li><a href="/index.html">HOME</a></li>
                    <li><a href="/pages/ppp.html">PPP</a></li>
                    <li><a href="/pages/mtn.html">MTN</a></li>
                    <li><a href="/pages/strategy.html">The Strategy</a></li>
                    <li><a href="/pages/process.html">The Process</a></li>
                    <li><a href="/pages/contact.html">Contact Us</a></li>
                </ul>
            </div>

        </nav>
    `;
}