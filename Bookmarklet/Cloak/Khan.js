javascript:(function() {var link = document.querySelector("link[rel*='icon']") || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://www.khanacademy.org/favicon.ico?logo';document.title = 'Khan Academy';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link);})();
