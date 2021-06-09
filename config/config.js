/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
        address: "::", // Address to listen on, can be:
        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
        // - another specific IPv4/6 to listen on a specific interface
        // - "", "0.0.0.0", "::" to listen on any interface
        // Default, when address config is left out, is "localhost"
        port: 8080,
        ipWhitelist: [],//"127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
        // or add a specific IPv4 of 192.168.1.5 :
        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        language: "nl",
        timeFormat: 24,
        units: "metric",

        modules: [
                {
                        module: 'MMM-RandomPhoto',
                        position: 'fullscreen_below',
                        config: {
                                opacity: 0.6,
                                animationSpeed: 500,
                                updateInterval: 600,
                                url: 'https://source.unsplash.com/1280x1024/?nature,blue'
                        }
                },
                {
                        module: "MMM-Spotify",
                        position: "top_left",
                        config: {
                                style: "mini", // "default" or "mini" available
                                control: "hidden", //"default", "hidden" available
                                updateInterval: 3000,
                                onStart: null, // disable onStart feature with `null`
                                allowDevices: [], //If you want to limit devices to display info, use this.
                                // allowDevices: ["RASPOTIFY", "My iPhoneX", "My Home speaker"],
                        }
                },
                // {
                //         module: "alert",
                // },
                // {
                //         module: "updatenotification",
                //         position: "top_bar"
                // },
                {
                        module: "clock",
                        position: "top_left"
                },
                        //        {
                        //              module: 'MMM-TracCar',
                        //              position: 'bottom_left',
                        //              config: {
                        //                      url: "http://dashboardmm.westeurope.cloudapp.azure.com:8082", // Traccar Server URL (free server @ http://demo5.traccar.org )
                        //                         // Secrets were rotated, need to load this from a config file not commited to GitHub to enable again
                        //                         // Traccar service was stopped, use sudo systemctl enable traccar.service to start again
                        //                         // Google maps api key was rotated, use https://console.cloud.google.com/apis/credentials?project=dashboardmm to look up new key
                        //                         position: "center",
                        //                      map_width: "450", // width of the map element
                        //                      map_height: "300", // height of the map element
                        //                      map_zoom: 15,
                        //              }
                        //      },
                {
                        module: "MMM-SummaCalendar",
                        position: "top_center"
                },
                {
                        module: "currentweather",
                        position: "top_left",
                        config: {
                                location: "Bodegraven",
                                locationID: "2758765",
                                appid: "4c2319a1c315663a565bcccb817ca7f7"
                        }
                },
                {
                        module: "MMM-SummaCalendarLegenda",
                        position: "top_left"
                },
                {
                        module: "newsfeed",
                        position: "top_bar",
                        config: {
                                feeds: [
                                        {
                                                title: "NewScientist.nl",
                                                url: "https://newscientist.nl/feed/"
                                        },
                                        {
                                                title: "Uplifting news",
                                                url: "https://www.reddit.com/r/UpliftingNews.rss"
                                        },
                                        {
                                                title: "Shower thoughts",
                                                url: "https://www.reddit.com/r/Showerthoughts.rss"
                                        },
                                        {
                                                title: "NtO",
                                                url: "https://www.reddit.com/r/nottheonion.rss"
                                        },
                                        {
                                                title: "Quotes",
                                                url: "https://www.reddit.com/r/inspirationalquotes.rss"
                                        },
                                ],
                                updateInterval: 20000,
                                animationSpeed: 5000,
                                ignoreOldItems: true,
                                showSourceTitle: false,
                                showPublishDate: false,
                                showDescription: true,
                                broadcastNewsFeeds: false,
                                broadcastNewsUpdates: false
                        }
                },
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
