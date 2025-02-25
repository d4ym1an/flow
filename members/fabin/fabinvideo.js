// const apiKey = 'YOUR_API_KEY';  // Replace with your YouTube Data API key
//         const channelUrl = 'https://youtube.com/@1fabin';  // The YouTube channel URL you want to track

//         // Function to fetch the latest video from the specified channel
//         function fetchLatestVideo() {
//             const channelId = getChannelIdFromUrl(channelUrl);

//             if (!channelId) {
//                 alert('Invalid YouTube channel link');
//                 return;
//             }

//             // Make API request to get the latest video
//             const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`;

//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.items && data.items.length > 0) {
//                         const latestVideo = data.items[0];
//                         const videoUrl = `https://www.youtube.com/watch?v=${latestVideo.id.videoId}`;
//                         const videoTitle = latestVideo.snippet.title;

//                         // Update the <a> tag's href attribute and inner text
//                         const latestVideoLink = document.getElementById('latest-video');
//                         latestVideoLink.href = videoUrl;
//                         latestVideoLink.innerHTML = `Watch the latest video: ${videoTitle}`;
//                     } else {
//                         document.getElementById('latest-video').innerHTML = 'No videos found for this channel.';
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching the latest video:', error);
//                     document.getElementById('latest-video').innerHTML = 'Failed to fetch the latest video.';
//                 });
//         }

//         // Function to extract the channel ID from a YouTube channel URL (both @username and old format)
//         function getChannelIdFromUrl(url) {
//             // Match for the @username format like https://youtube.com/@username
//             const handleRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/@([^\/]+)/;
//             const match = url.match(handleRegex);

//             if (match) {
//                 // If it's a custom handle, return the username as the channel ID
//                 return match[1];
//             }

//             // Fallback: Match for the old-style channel URL like https://youtube.com/channel/CHANNEL_ID
//             const channelRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:channel\/|c\/([^\/]+))/;
//             const fallbackMatch = url.match(channelRegex);

//             return fallbackMatch ? fallbackMatch[1] : null;
//         }

//         // Run the fetchLatestVideo function when the page loads
//         window.onload = fetchLatestVideo;
