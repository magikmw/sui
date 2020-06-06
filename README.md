## SUI
*a startpage for your server and / or new tab page*

![screenshot](https://i.imgur.com/J4d7Q3D.png)

[More screenshots](https://imgur.com/a/FDVRIyw)

### Install:

sui runs in any http server like apache, nginx, lighttpd, httpd

Download/clone repo and copy the contents of `app` directory to where your http server will expect them. That's it.

#### Docker / Podman

##### Prerequisites:
 - Docker: [Linux](https://docs.docker.com/install/linux/docker-ce/debian/), [Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac), [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
 - Also tested with [Podman](https://podman.io/) (replace docker with podman in commands below)

##### Quick install steps:  

 - `git clone` or download this repository
 - Build the image using `docker build -f Dockerfile -t sui`
 - Run the container with `docker run -d -p 4000:80  --name sui localhost/sui`
 - The page should be available at  `http://localhost:4000`

Please note:
 - You can change host's port (`4000`) to any valid port you may want
 - You can use `--user` switch in your `docker run` command to run the process as a different user

### Customization

#### Changing color themes
 - Click the options button on the left bottom

#### Apps
Add your apps by editing apps.json:

    {
	    "apps" : [
		    {"name":"Name of app 1","url":"sub1.example.com","icon":"icon-name"},
		    {"name":"Name of app 2","url":"sub2.example.com","icon":"icon-name"}
	    ]
    }

Please note:

 - No `,` at the end of the last app's line
 - Find the names  of icons to use at [Material Design Icons](https://materialdesignicons.com/)

#### Bookmarks
Add your bookmarks by editing links.json:

```
{  
   "bookmarks":[  
      {  
         "category":"Category1",
         "links":[  
            {  
               "name":"Link1",
               "url":"http://example.com"
            },
            {  
               "name":"Link2",
               "url":"http://example.com"
            }
         ]
      },
      {  
         "category":"Category2",
         "links":[  
            {  
               "name":"Link1",
               "url":"http://example.com"
            },
            {  
               "name":"Link2",
               "url":"http://example.com"
            }
         ]
      }
   ]
}
```
Add names for the categories you wish to define and add the bookmarks for each category.

Please note:

 - No `,` at the end of the last bookmark in a category and at the end of the last category


#### Color themes

These can be added or customized in the `themes.js` configuration file.


### Known Issues

* Search function key `/` opens QuickSearch instead while using Firefox  
You can probably change the QuickSearch key using an extension, otherwise the sui search key can be set by editing file `assets/js/script.js` on [THIS LINE](https://github.com/magikmw/sui/blob/a502822e3f42ed15e37b8ef9546304c5b6bd41d4/assets/js/search.js#L56) (if using docker make sure you edit it before building an image or build again).
