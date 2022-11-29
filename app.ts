import { TwitterApi } from 'twitter-api-v2';
const {execSync} = require('child_process');
const fetch = require("node-fetch");




var api_key = 'yA0DwQOYG00VsXPwE7aTdoIyX'

var api_key_secret = '56OlSv8uoaPVjWYXoEdNqP8rcqBwae5nNrSwKz3wm9QHOeoBmr'

var access_token = '1591553353972125703-wkKdQKLfJFy681SPdDV3mGunx2zNPY'

var access_token_secret = 'vGGMuzX5juEwqXCyJZuT2ObJBHd1LyIUlxiZyVAaEuZAN'
//create
// OAuth 1.0a (User context)
const userClient = new TwitterApi({
    appKey: 'yA0DwQOYG00VsXPwE7aTdoIyX',
    appSecret: '56OlSv8uoaPVjWYXoEdNqP8rcqBwae5nNrSwKz3wm9QHOeoBmr',
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
    accessToken: '1591553353972125703-wkKdQKLfJFy681SPdDV3mGunx2zNPY',
    accessSecret: 'vGGMuzX5juEwqXCyJZuT2ObJBHd1LyIUlxiZyVAaEuZAN',
});

  
//userClient.v1.tweet('Hello, this is a test.');
//userClient.v1.uploadMedia('./big-buck-bunny.mp4

var hour_ = new Date().getHours();
var min_ = new Date().getMinutes();
//console.log(`${hour}:${min}`);


//var hours_to_tweet_at = [`${hour_}:${min_}`, '18:0']



var hours_to_tweet_at = []
//create an array of hours to tweet at with 1 minute intervals starting from 11:6 to 11:59 without a loop

for (var i = 10; i < 20; i++) {
  hours_to_tweet_at.push(`11:${i}`)
}

console.log("Hours to tweet at: ", hours_to_tweet_at)



var i = 0;

var this_week_metrics = [];
//print if 
var last_timestamp_checkpoint = 0

var metrics = ['Big chances', '% Conversion of big chances', '% Conversion of shots in goal', '% Conversion of shots inside the box', '% Conversion shots outside the box', 'Expected Goal Build-Up (xGBuildup)', 'Expected Goal Chain', 'Expected Goals (xG)', 'Freekicks', 'Freekicks - Goals', 'Goals', 'Goals by foot', 'Goals with head', 'Penalties', 'Penalties - Goals', 'Shots on target', '% Shots on target conversion rate', 'Assists', 'Assists inside the box', 'Assists outside the box', 'Assists via open play', 'Assists via setplay', 'Chance creation', 'Crosses', 'Dribblings', 'Expected Assists (xA)', 'Key passes', '% Successful dribbles', 'One-touch passes', '% One-touch passes completion', 'Pass Progression Value', '% Pass completion', 'Passes', 'Passes creating danger', 'Passes into final third', '% Passes into final third completion', 'Passes into the box', '% Passes into the box completion', 'Passing speed', "Aerial duels opponent's half", 'Air challenges', 'Air challenges lost', 'Air challenges won', 'Blocked shots', 'Blocked crosses', 'Blocks total', '% Challenges won', 'Errors leading to goal', 'Fouls', 'Lost balls', 'Lost balls in own half', 'Pass interceptions', "Pass interceptions opponent's half", 'Pass interceptions own half', 'Red cards', 'Safety index', 'Successful tackles', 'Tackles', "Tackles opponent's half", 'Tackles own half', 'Yellow cards', 'Good interceptions', 'Interceptions', 'Saves', 'Shots saved']
var api_metrics = ['big_chances', 'big_chances_conversion_rate', 'conversion_of_shots_on_goal', 'conversion_of_shots_inside_box', 'conversion_of_shots_outside_box', 'expected_goal_buildup', 'expected_goal_chain', 'expected_goal', 'freekicks', 'goals_freekicks', 'goals_total', 'goals_by_foot', 'goals_with_head', 'penalties', 'goals_penalties', 'shots_on_target', 'shots_on_target_conversion_rate', 'assists', 'assists_inside_the_box', 'assists_outside_the_box', 'assists_open_play', 'assists_set_play', 'chance_creation', 'crosses', 'driblings_total', 'expected_assists', 'key_passes', 'dribbles_successful', 'passes_one_touch', 'passes_one_touch_accuracy_percentage', 'pass_progression_value', 'passes_total_completition_rate', 'passes_total', 'passes_creating_danger', 'passes_into_final_third', 'passes_into_final_third_completion_rate', 'passes_into_the_box', 'passes_into_the_box_completion_rate', 'passing_speed', 'air_challenges_opponent_half', 'air_challenges', 'air_challenges_lost', 'air_challenges_won', 'blocked_shots', 'blocked_crosses', 'blocks_total', 'challenges_won_percentage', 'errors_leading_goal', 'fouls', 'lost_balls', 'lost_balls_own_half', 'pass_interceptions', 'pass_interceptions_opponents_half', 'pass_interceptions_own_half', 'red_cards', 'safety_index', 'tackles_won', 'tackles_total', 'tackles_opponent_half', 'tackles_own_half', 'yellow_cards', 'goalkeeper_interceptions_good', 'goalkeeper_interceptions', 'goalkeeper_saves', 'goalkeeper_shots_saved']
//var auth = tweepy.OAuth1UserHandler(api_key,api_key_secret,access_token, access_token_secret)

//var api = tweepy.API(auth)
//while true breaks the fetch code
console.log("starting")

var run_loop = true

var hour = new Date().getHours();
  var min = new Date().getMinutes();

function main() {
  
  if (((new Date().getTime() / 1000) - last_timestamp_checkpoint) >= 604800) {
    //this_week_metrics = []; //might be problematic
    //console.log("resetting the array...")
  }
  
  hour = new Date().getHours();
  min = new Date().getMinutes();
  console.log(`${hour}:${min}`);
  if (hours_to_tweet_at.indexOf(`${hour}:${min}`) > -1) {
    console.log(`${hour}:${min}`);

    if (last_timestamp_checkpoint == 0) {
      last_timestamp_checkpoint = new Date().getTime() / 1000;
    }                                                             
    
      
      i = Math.floor(Math.random() * 66) //66
      console.log("This week metrics: "+this_week_metrics)
      
      if (this_week_metrics.includes(i)) {
        console.log("already tweeted this metric: " + i)
        execSync(`sleep ${2}`);
        main();
        
      } else {
        
        this_week_metrics.push(i)
        
        var metric = metrics[i];
        var api_metric = api_metrics[i];
        
        //console.log("Processing data...\n\n\n\n");
        var url = `https://one-versus-one.com/new-rankings-data?model=${api_metric}&page=1&age_min=14&age_max=50`;
        //console.log(url);
        
        fetch(url).then((response: { json: () => any; }) => response.json()).then(async (json__: { [x: string]: any; }) => {
          //var response = requests.get(url).json();
          //console.log(json__);
          var hooo = JSON.stringify(json__);
          var hooo_ = JSON.parse(hooo);
  
        var data = hooo_["data"];
        var z = 0;
        var to_tweet = `Top ${metric}\n`;
        console.log("Processing data...\n\n\n\n");
        for (var player of data) {
          //console.log(player);
          if (player["name"] == "" ||player["name"] == " " ||player["name"] == "  ") {
            
          } else {
            
            z += 1;
            
            var tmp = player["name"].split(" ");
            var player_name = `${tmp[0]} ${tmp[tmp.length-1]}`;
            var player_metric_value = player["value"];
            to_tweet = to_tweet + `\n${z}-${player_name}: ${player_metric_value}`;
          }
          }
          //console.log("Yay");
          console.log(to_tweet);
          //var tweet = api.update_status(str(to_tweet));
          var tweet = await userClient.v1.tweet(to_tweet).then((response: any) => console.log());//console.log(response));
          
          console.log("Done !");
          if (`${hour}:${min}` == hours_to_tweet_at[0]) {
            //execSync(`sleep ${7 * 60 * 60 + 58 * 60}`);
            execSync(`sleep ${50}`);
            main();
            //time.sleep();
          } else if (`${hour}:${min}` == hours_to_tweet_at[1]) {
            //execSync(`sleep ${15 * 60 * 60 + 58 * 60}`)
            execSync(`sleep ${50}`);
            main();
            //time.sleep(15 * 60 * 60 + 58 * 60);
          } else if (`${hour}:${min}` == hours_to_tweet_at[2]) {
            //execSync(`sleep ${15 * 60 * 60 + 58 * 60}`)
            execSync(`sleep ${50}`);
            main();
            //time.sleep(15 * 60 * 60 + 58 * 60);
          }
          else if (`${hour}:${min}` == hours_to_tweet_at[3]) {
            //execSync(`sleep ${15 * 60 * 60 + 58 * 60}`)
            execSync(`sleep ${50}`);
            main();
          }
          else{
            main()
          }

          
  
        
        });
  
        
        
        
        
  
        
  
        
        
  
      }
  
      
        
  
        
        
        
            
        
  
        
      
    
  }else{
    execSync(`sleep ${10}`);
    main();
    
  }
  

}

main();
