import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />

          <div id="fb-root"></div>
          <div id="fb-customer-chat" class="fb-customerchat"></div>

          <NextScript />
          <script dangerouslySetInnerHTML={{
                        __html: `var chatbox = document.getElementById('fb-customer-chat');
                        chatbox.setAttribute("page_id", "104181658543041");
                        chatbox.setAttribute("attribution", "biz_inbox");
                    
                        window.fbAsyncInit = function() {
                          FB.init({
                            xfbml            : true,
                            version          : 'v11.0'
                          });
                        };
                    
                        (function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));`
                    }} />
        </body>
      </Html>
    )
  }
}

export default MyDocument