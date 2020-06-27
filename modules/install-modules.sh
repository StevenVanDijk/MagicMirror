git clone https://github.com/StevenVanDijk/MMM-SummaCalendar.git
git clone https://github.com/StevenVanDijk/MMM-TracCar.git
git clone https://github.com/diego-vieira/MMM-RandomPhoto.git
git clone https://github.com/bugsounet/MMM-Spotify.git

for i in MMM-*
do
    cd $i
    npm i
    cd ..
done