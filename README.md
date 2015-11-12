# reactAthon_One

## The GIT Repo for the first React Evening. ##

Linux and OSX users will be good to go, Windows users please download and install a terminal. This one has been suggested: http://cmder.net/

Once you've got a terminal and downloaded this repo, navigate (in your Terminal) to the root folder (reactAthon) and run 'npm install'.

Once all the node packages have been installed (which the package.json file lists, and that is what tells the npm is required) run 'gulp' to process the source.

Then open the index.html in a browser and you should see a damn ugly but working weather service widget.

Currently (12/11/2015) this app is incredibly basic. It doesn't really do much with states, and certainly doesn't use Redux to help manage states. That will come later. For now this shows how to get basic components built and rendered to the screen, and how to pass properties to those components.

Also note that I'm using ES6 here becuase that's what I prefer to use.

Gulp is set to process to a dev environment, so the compiled source is still bloated. We'll compile for distribution later.
