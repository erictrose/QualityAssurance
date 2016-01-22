Quality Assurance
=============
<!--[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)-->
<!--[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)-->
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges) <br>
*IOS application* <br>

Ipad app for performing quality assurance checks in a warehouse environment. <br>

[Design Process](http://imgur.com/a/IvHJL) <br>
[Prototype](https://projects.invisionapp.com/share/R357VUX5A#/screens) <br>

Technologies: <br>
[React](https://facebook.github.io/react/) - [React-Native](https://facebook.github.io/react-native/) <br>
[Flexbox](https://en.wikipedia.org/wiki/CSS_Flex_Box_Layout) <br>

## Run in simulator
1) git clone https://github.com/erictrose/QualityAssurance.git<br>
2) npm install<br>
3) open ios>QualityAssurance.xcodeproj in Xcode<br>
4) select iPad simulator (not your device) as target device<br>
5) Hit run<br>
## Run on iPad
1) git clone https://github.com/erictrose/QualityAssurance.git<br>
2) npm install<br>
3) make sure your ipad is on the same network<br>
3) change line 34 in ios>QualityAssurance>AppDelegate.m from localhost to your IP<br>
3) open ios>QualityAssurance.xcodeproj in Xcode<br>
4) select your device (not iPad simulator) as target device<br>
5) Hit run (you may need to stop and start again if the translator isnt loaded yet)<br><br>
note: it is bundled for offline use, but there is a bug with the png's. to run offline, comment out line 34 in ios>QualityAssurance>AppDelegate.m
and uncomment line 42.
