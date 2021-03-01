## Final Project
# 💬 The Words - A Web Installation
Website link: https://ak7588.github.io/SoftwareArt/Project%203%20-%20Final/index.html

print("Welcome to < / The Words >")

### **Introduction**

With the start of the global pandemic, how many times have you been in a real museum? Saw an actual installation?

At least for me, that number is 0 — and still counting!

Therefore, my main inspiration behind this project was to replicate this experience, but in a different medium, creating a web installation to present written pieces made by and with technology.


### **Process**

#### *Ideation*

From the very beginning of this project, I wanted it to have a specific style. This includes either visual stylistic or something perceptual, and I chose sound. From what I could remember from my limited museum experience, some kind of music was always there behind each installation, and I wanted to replicare this experience on the web. Ambient music plays a vital role in this installation and is present on every page of the website.

#### *Sound*

From a quick Google search, I found [this open-source sound library](https://www.zapsplat.com/sound-effect-category/ambient/), from which I have downloaded all of the sound pieces. After a few manipulations in Audacity, the final music elements were born. The idea was for text to dictate which kind of sound will play in the background, but more on this and related limitations I faced later.

#### *Design*

Another important element of preparing to launch the installation was its design. I created [this Wireframe](https://www.figma.com/file/j2qRsmqLQVGExKduWk9PTf/Software-Art-Project?node-id=0%3A1) to have a better understanding of the user-flow.

#### *Code Choices for the Web*

After I had an idea of how will my project look like and what it will do, it was time to think about JavaScript. Because of previous familiarity with [p5.js](https://p5js.org/), I didn't think too much about other JS libraries and frameworks, and chose to proceed with p5. You can see the traces of the code on the landing page of the website. The plan was to make the sound work with p5, but after a few days of jumping back and forth between documentation, YouTube tutorials, sound libraries, and clicking *inspect >>> console*, I could not figure out why my machine did not want to cooperate and load the p5 sound. I had to find a workaround - and I did! - because the deadline was fast approaching. HTML's audio tags came for help, but that meant that all of my audio pieces became static and did not depend on the text.

### **Coding Breakdown**

All of the creative writing piece shown on the web are made entirely with Colab using either GPT-2 algorithms, Markov Chains, or some combination of web-scraping and the 'random' library. As it would be too long if I pasted my code into here, I will just provide the links for all of the individual Colab notebooks for each piece displayed on the website:

#### Code Poems:

1. [< / Life >](https://colab.research.google.com/drive/16IaWJ4I-zCK5mkEPzPMlAMR9CKUvpb0d?usp=sharing%20target%3D)
2. [< / Emptiness >](https://colab.research.google.com/drive/16IaWJ4I-zCK5mkEPzPMlAMR9CKUvpb0d?usp=sharing%20target%3D)
3. [< / Capita >](https://colab.research.google.com/drive/16IaWJ4I-zCK5mkEPzPMlAMR9CKUvpb0d?usp=sharing%20target%3D)

#### Fiction:
1. [< / Absurd Tales >](https://colab.research.google.com/drive/1PKLTVZYD1blbDCQHMKawBRwUz49QkfSV?usp=sharing)
1. [< / William Markov Chain >](https://colab.research.google.com/drive/1_bmkorM-1-N4H_p01BQTeReeywoH5kxD?usp=sharing%20target%3D)
1. [< / Imagery >](https://colab.research.google.com/drive/1pYsf1vn4noyHm-sXLfKeuyfOcqh95vEs?usp=sharing)


### **Limitations and Next Steps**

As I mentioned before, it is important to note that the sound linked to each web-page is loaded statically because of some issues with my machine and p5. So a good next step for this project would be thinking how to make the sound experience *interactive* and *dynamic* and perhaps add more written pieces to see how the new sound is produced.

Another thing to think about would be how to make this installation accessible to those who might perceive sound differently. Adding closed captions describing each individual sound might work for this in the future.

### **Conclusion**

Overall, this was a great piece to work on and I really enjoyed spending time and energy on it. Go Software Art!
