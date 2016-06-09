# fanfiction-userscript-professors-point-of-view

I started to read the fanfiction story [The Professors' Point of View][ff_story], and I quickly got tired of trying to remember which person was talking. The Author uses bold, italic, underline, and combinations to distinguish speakers, rather than writing the person's name.

This script will prepend the Professor's name to their respective lines. It even automatically pulls in the rotating professor slot (Quirrel, Lupin, etc) and prepends the correct name during their respective chapters.

Some chapters on the story are written in a standard format, rather than the dialog/script format. Most of those chapters are untouched. However, a few chapters mix in script format with standard. In those, my script will (unfortunately) prepend Sprout to the standard dialog paragraphs. Perhaps I'll be able to fix that in the future, or hardcode in some chapter detection.

## Installation Instructions
The easiest way to install the script is to first have [GreaseMonkey][greasemonkey] ([Firefox][gm_firefox]) or [TamperMonkey][tampermonkey] ([Chrome][tm_chrome], [Safari][tm_safari], [Opera][tm_opera]). If you have those addons installed already, simply [open the script][script] and follow the prompts to install it.

For more detailed steps, [follow these instructions][instructions] for your particular browser.
[ff_story]: https://www.fanfiction.net/s/7031677
[greasemonkey]: http://www.greasespot.net/
[gm_firefox]: https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/
[tampermonkey]: https://tampermonkey.net/index.php
[tm_chrome]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[tm_safari]: https://tampermonkey.net/index.php?ext=dhdg&browser=safari
[tm_opera]: https://addons.opera.com/en/extensions/details/tampermonkey-beta/
[script]: https://raw.githubusercontent.com/schrauger/fanfiction-userscript-professors-point-of-view/master/fanfiction-userscript-professors-point-of-view.user.js
[instructions]: http://stackapps.com/tags/script/info

## Known Issues
* New versions of Chrome prevent the script from installing.
 * Solution: Open a new window and go to the url "chrome:extensions". Then drag-and-drop the [script url][script] onto the extensions page, where Chrome will then let you install the script.
