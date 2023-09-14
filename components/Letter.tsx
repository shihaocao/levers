import Button from "../components/Button";
function Text({ children }) {
  return (
    <div className=" px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-1/2 py-10 flex flex-col gap-4">
      {children}
    </div>
  );
}

function Sidenote({ children, right }) {
  return (
    <>
      <label
        htmlFor="sn-extensive-use-of-sidenotes"
        className="margin-toggle sidenote-number"
      ></label>
      <input
        type="checkbox"
        id="sn-extensive-use-of-sidenotes"
        className="margin-toggle"
      />
      <span className={right ? "sidenote-right" : "sidenote-left"}>
        {children}
      </span>
    </>
  );
}

export default function Letter() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <Text>
        <p className="">
          <em>
            A Living Database of Methods to Accelerate Science and Technology
          </em>
        </p>
        <p className="">
          <em>By Anson Yu and Kelvin Yu</em>

          <Sidenote right={true}>(not siblings and not married)</Sidenote>
        </p>
        <h3 className="">
          <strong>Motivation</strong>
        </h3>
        <p className="">
          Levers for Progress is an open-source collection of{" "}
          <strong>policies, tactics, and reforms</strong> used by modern
          institutions to accelerate innovation in the United States.
          <Sidenote right={false}>
            All views presented here are personal to Kelvin and Anson and do not
            represent the views of their employers.
          </Sidenote>
          <br />
          <br />
          For each lever, we explain how it works, its significance, potential
          pitfalls, and provide case studies. Our goal is to provide an overview
          of ways for governments, companies, philanthropies, universities,
          foundations, and other institutions to increase their scientific and
          technological output.
          <br /> <br />
          We acknowledge the project’s title is a bit of a misnomer. If progress
          is{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jamesclear.com/book-summaries/lessons-of-history#:~:text=If%20progress%20is%20real%2C%20it,larger%20portion%20of%20human%20heritage."
          >
            real
          </a>
          , it’s certainly not concentrated in only beakers, labs, and
          factories. Carving a holistic political, philosophical, and cultural
          definition for civilizational progress is a grand challenge. We leave
          that undertaking to braver souls.
          <br /> <br />
          We chose to focus on science and technology because, despite their
          measurable, material, and scalable improvements on quality of life, we
          as a culture do not fully appreciate or support their role in enabling
          lives of greater prosperity. Not in Washington, where{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.brookings.edu/articles/the-bold-vision-of-the-chips-and-science-act-isnt-getting-the-funding-it-needs/"
          >
            underfunded
          </a>{" "}
          government scientists are forced to work out of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facilitiesnet.com/maintenanceoperations/tip/NIST-Facilities-Crumbling-Under-Maintenance-Backlog--51178"
          >
            crumbling
          </a>{" "}
          buildings. Not in education, where US students have{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.csis.org/blogs/perspectives-innovation/us-should-strengthen-stem-education-remain-globally-competitive#:~:text=The%20U.S.%20is%20falling%20behind%20in%20STEM%20proficiency%20compared%20to%20other%20leading%20countries"
          >
            underachieved
          </a>{" "}
          in STEM for decades. Not even in Silicon Valley, which tends to sneer
          at academia and government,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.energy.gov/articles/75-breakthroughs-americas-national-laboratories-0"
          >
            forgetting
          </a>{" "}
          that research from universities and national labs underpin much of
          society.
          <br /> <br />
          This was not always the case. In the 1940s, we threw the nation’s
          intellectual capacity and industrial might at the Manhattan Project.
          In the 1960s, we threw 400,000 people, 20,000 institutions, and 4.4%
          of the federal budget into the Apollo missions., We even had the
          audacity to declare war on cancer in the 1970s. We inexplicably lost
          this ethos—and only began rekindling it in the last few years. The
          rest of this letter explains this history, but if you’d like to skip
          to the levers that are being used today to reanimate this spirit, you
          can head{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.leversforprogress.com/collection"
          >
            here
          </a>
          .
        </p>
      </Text>
      <div>
        <figure>
          <img className="hidden md:inline-block" src="/letter-moon.png" />

          <img
            className="md:hidden inline-block px-5"
            src="letter-moon-sm.png"
          />
        </figure>
      </div>
      <Text>
        <p className="">
          <a href="https://www.nasa.gov/centers/marshall/history/this-week-in-nasa-history-apollo-16-launches-april-16-1972-1.html">
            <em>Source</em>
          </a>
          <em>
            : Apollo 16 Right: Apollo 17, the final two times humans went to the
            moon
          </em>
        </p>
        <h3 className="">
          <strong>The Rise and Fall of Technological Statecraft</strong>
        </h3>
        <p className="">
          Starting in the early 2010s, a small group of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.com/Great-Stagnation-Low-Hanging-Eventually-eSpecial-ebook/dp/B004H0M8QS"
          >
            economists
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.lesswrong.com/posts/Xqcorq5EyJBpZcCrN/thiel-on-progress-and-stagnation"
          >
            entrepreneurs
          </a>{" "}
          began promoting the “stagnation hypothesis”: that scientific,
          technological, and economic progress has slowed significantly in
          recent decades.
        </p>
        <p className="">
          Dr. Robert Gordon’s{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.com/Rise-Fall-American-Growth-Princeton/dp/153661825X"
          >
            book
          </a>{" "}
          <em>The Rise and Fall of American Growth</em> observes that 1870-1970
          witnessed unprecedented improvements in people’s lives, driven by
          inventions like the electric grid, internal combustion engine and
          cars, all{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://penntoday.upenn.edu/news/how-appliance-boom-moved-more-women-workforce"
          >
            modern appliances
          </a>
          , an Agricultural Revolution, global peace secured by nuclear weapons,
          the rapid expansion of modern medicine, and more. The greatest
          inventions of recent decades—computers and the Internet—have advanced
          our species in transformative ways, but{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wtfhappenedin1971.com/"
          >
            have
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.brookings.edu/wp-content/uploads/2020/06/Productivity_Framing_LO_6.16_FINAL.pdf"
          >
            not
          </a>{" "}
          uplifted wages or life expectancy at the same scale as past
          innovations. Even science itself is showing{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theatlantic.com/science/archive/2018/11/diminishing-returns-science/575665/"
          >
            diminishing returns
          </a>
          .
        </p>

        <img className="" src="letter-conveniences.png" />

        <p className="">
          <a href="https://press.princeton.edu/books/paperback/9780691175805/the-rise-and-fall-of-american-growth">
            <em>Source</em>
          </a>
          <em>
            : Rise and Fall of American Growth | Data: Lebergott (1976), pp.
            260-88.
          </em>
        </p>
        <p className="">
          Fears of stagnation are not new in the modern West. John Keynes{" "}
          <a href="http://www.econ.yale.edu/smith/econ116a/keynes1.pdf">
            wrote
          </a>{" "}
          in 1930,{" "}
          <em>
            “We are suffering just now from a bad attack of economic pessimism.
            It is common to hear people say that the epoch of enormous economic
            progress which characterized the nineteenth century is over.”
          </em>
        </p>
        <p className="">
          Fifteen years and a world war later, Vannevar Bush—Roosevelt and
          Truman’s chief science advisor—
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://archive.is/ezrwO#selection-1533.1-1533.455"
          >
            cautioned
          </a>{" "}
          against increasing specialization in science:
        </p>

        <p className="">
          <em>
            “There is a growing mountain of research. But there is increased
            evidence that we are being bogged down today as specialization
            extends. The investigator is staggered by the findings and
            conclusions of thousands of other workers—conclusions which he
            cannot find time to grasp, much less to remember, as they appear.
            Yet specialization becomes increasingly necessary for progress, and
            the effort to bridge between disciplines is correspondingly
            superficial.”
          </em>
        </p>
        <p className="">
          Bush followed his comments by instrumenting the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nature.com/articles/466922a"
          >
            Endless Frontier
          </a>{" "}
          era — technological statecraft at a scale never before seen in
          history. The Greatest Generation recognized science and technology
          were paramount to US victory in WWII and would continue to be for its
          ascendancy, so they poured{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ncses.nsf.gov/data-collections/national-patterns"
          >
            1.86%
          </a>{" "}
          of GDP into R&amp;D by 1964 (3x higher than today’s federal R&amp;D
          budget). Most of today’s major scientific institutions were created
          during this{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.annualreviews.org/doi/pdf/10.1146/annurev.ea.23.050195.000245"
          >
            golden age
          </a>
          , including the NSF to be the central hub for research, NASA to
          explore the frontiers of space, and DARPA to garrison national
          security. They also dramatically expanded the National Institutes of
          Health to push the limits of biology and created programs that would
          later meld into the Department of Energy. The invention of the peer
          review system streamlined scientists' ability to wade through the
          “growing mountain of research” and match funds to the most qualified
          ones. The word “innovation” itself{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.researchgate.net/publication/303428207_Innovation_contested_The_idea_of_innovation_over_the_centuries#:~:text=Only%20after%20World%20War%20II%20did%20the%20concept%20of%20innovation%20become%20almost%20exclusively%20reduced%20to%20technological%20and%20entrepreneurial%20developments"
          >
            became synonymous
          </a>{" "}
          with technology during this time.
        </p>
      </Text>
      <div>
        <figure className="image">
          <img className="hidden md:inline-block" src="/letter-vannevar.png" />

          <img
            className="md:hidden inline-block px-5"
            src="letter-vannevar-sm.png"
          />
        </figure>
      </div>

      <Text>
        <p className="">
          <a href="https://www.computerhistory.org/revolution/analog-computers/3/143">
            <em>Source</em>
          </a>
          <em>: Vannevar Bush (1890-1974) with his analog computer.</em>
        </p>
        <p className="">
          Cultural narratives about technology took a darker turn in the 1960s
          and 70s. Left-wing humanists{" "}
          <a href="https://www.bostonreview.net/articles/andrew-jewett-science-under-fire/#:~:text=increasingly%20argued%20that%20science%E2%80%99s%20cultural%20influence%20buttressed%20social%20inequalities%2C%20keeping%20favored%20groups%20in%20power%20and%20others%20down">
            argued
          </a>{" "}
          that science’s “cultural influence buttressed social inequalities,
          keeping favored groups in power and others down.” The emerging New
          Right{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bostonreview.net/articles/andrew-jewett-science-under-fire/#:~:text=Christian%20Right%20focused%20on%20the%201960s.%20Proponents%20of%20each%20narrative%20have%20discerned%20a%20pervasive%20sense%20of%20moral%20aimlessness%20that%20they%20often%20linked%20to%20the%20cultural%20influence%20of%20science."
          >
            saw
          </a>{" "}
          technology threatening traditional virtues and ways of living. Many of
          these critiques were justified, but the degree to which innovation was
          scapegoated was not.These overlapping revolts gradually dismantled
          technological ambition from politics, of science from the state.
        </p>
        <p className="">
          The final nail in the coffin came with the end of the Cold War.
          Without a geopolitical rival, R&amp;D was recast from a positive-sum
          priority for external security to a zero-sum competition for domestic
          appropriations. In response to the 1993{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://archive.is/NzbSU#selection-1719.0-1719.161"
          >
            termination
          </a>{" "}
          of the Superconducting Super Collider after Congress already invested
          $2 billion, Nobel Laureate Steven Weinberg lamented:
        </p>
        <p className="">
          <em>
            “Spending for the SSC had become a target for a new class of
            Congressmen elected in 1992. They were eager to show that they could
            cut what they saw as Texas pork, and they didn’t feel that much was
            at stake. The Cold War was over, and discoveries at the SSC were not
            going to produce anything of immediate practical importance.
          </em>
        </p>
        <p className="">
          <em>
            What motivates legislators is the immediate economic interests of
            their constituents. Big laboratories bring jobs and money into their
            neighborhood, so they attract the active support of legislators from
            that state, and apathy or hostility from many other members of
            Congress.
          </em>
          <Sidenote right={true}>
            The F-35 fighter plane suffers from a similar incentive problem. The
            $1 trillion jet—the DoD's most expensive weapons program ever—has
            more than{" "}
            <a href="https://www.nytimes.com/2019/08/21/magazine/f35-joint-strike-fighter-program.html#:~:text=It%E2%80%99s%20no%20accident,criticize%20this%20program">
              1,500
            </a>{" "}
            suppliers spread across every state, making it cancel-proof despite
            repeated cost overruns.
          </Sidenote>
          <br />
          <br />
          <em>
            The Clinton administration decided that it could only support one
            large technological project in Texas, and it chose the Space
            Station. The Space Station had the great advantage that it cost
            about ten times more than the SSC, so that NASA could spread
            contracts for its development over many states.{" "}
          </em>
          <em>
            <strong>
              Perhaps if the SSC had cost more, it would not have been canceled.
            </strong>
          </em>
          <em>”</em>
        </p>
      </Text>
      <div>
        <figure className="image">
          <img className="hidden md:inline-block" src="/letter-ssc.png" />

          <img
            className="md:hidden inline-block px-5"
            src="letter-ssc-sm.png"
          />
        </figure>
      </div>
      <Text>
        <p className="">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://particle.physics.ucdavis.edu/john/"
          >
            <em>Source</em>
          </a>
          <em>: The SSC tunnel one year before it was canceled</em>
        </p>
        <p className="">
          Instead, the world’s flagship particle accelerator was built in
          Europe. Research fell out of fashion as a federal priority. Following
          Milton’s neoliberal doctrine, the government increasingly ceded
          technological inventions (and their supply chains) to the private
          sector and global markets. As a Bush I economics advisor famously{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://americancompass.org/potato-chips-computer-chips-yes-there-is-a-difference/"
          >
            quipped
          </a>
          , &quot;computer chips, potato chips, what’s the difference?&quot;
          Industrial atrophy followed, with a nearly $60 billion trade surplus
          of advanced technology products (2020 dollars) in 1992 to a deficit of
          $191 billion in 2020.{" "}
          <Sidenote right={true}>
            Advanced Technology Products includes biotech, advanced materials
            and electronics, aerospace, weapons, nuclear, and others as defined
            by the US Census Bureau.
          </Sidenote>
        </p>
      </Text>
      <div className="flex flex-col gap-x-0 gap-y-4 lg:gap-y-4  lg:gap-x-4 lg:flex-row">
        <figure className="image">
          <img src="/letter-randd.png" />
        </figure>
        <figure className="image">
          <img src="/letter-spending.png" />
        </figure>
      </div>
      <Text>
        <h3 className="">
          <strong>The Roots of Revival</strong>
        </h3>
        <p className="">
          Close observers of science and technology may have noticed past
          headwinds reversing in recent years, fueled by an unlikely
          intersection of movements.
        </p>
        <p className="">
          Industrial policy, once a{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.jstor.org/stable/40722344"
          >
            dirty phrase
          </a>{" "}
          in American politics, has gained bipartisan traction in Washington.
          Efforts to build better roads, counter China, and deploy faster clean
          energy have resulted in $2 trillion of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.npr.org/2021/06/24/1009923468/heres-whats-included-in-the-infrastructure-deal-that-biden-struck-with-senators"
          >
            infrastructure
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mckinsey.com/industries/public-and-social-sector/our-insights/the-chips-and-science-act-heres-whats-in-it"
          >
            technology
          </a>
          , and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://thefulcrum.us/Government/Congress/inflation-reduction-act"
          >
            climate
          </a>{" "}
          investments.
        </p>
      </Text>
      <div className="flex flex-col gap-x-0 gap-y-4 lg:gap-y-4  lg:gap-x-8 lg:flex-row">
        <div className="flex  gap-x-0 gap-y-4 lg:gap-y-4  lg:gap-x-8 flex-row">
          <figure className="image">
            <img src="letter-climate.png" />
          </figure>
          <figure className="image">
            <img src="letter-climate2.png" />
          </figure>
        </div>
        <figure className="image">
          <img src="letter-construction.png" />
        </figure>
      </div>
      <Text>
        <p className="">
          This ethos to build and innovate is present in economic philosophies
          emerging across the political spectrum. On the left,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theatlantic.com/ideas/archive/2022/01/scarcity-crisis-college-housing-health-care/621221/"
          >
            abundance agendists
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nytimes.com/2021/09/19/opinion/supply-side-progressivism.html"
          >
            supply-side progressives
          </a>{" "}
          like Ezra Klein urge liberals to “take innovation as seriously as
          affordability.” On the right, deregulation and innovation have become
          calling cards for reversing the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.niskanencenter.org/cost-disease-socialism-how-subsidizing-costs-while-restricting-supply-drives-americas-fiscal-imbalance/"
          >
            spiraling costs
          </a>{" "}
          of core social goods and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://americancompass.org/should-the-u-s-adopt-an-industrial-policy/#:~:text=The%20second%20point%2C%20and%20in%20my%20mind%2C%20probably%20the%20central%20one%2C%20is%20innovation%20and%20productivity."
          >
            recatalyzing
          </a>{" "}
          economic growth. Technolibertarian flavors also appear in Silicon
          Valley, with appeals to restore “
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://a16z.com/2022/01/14/building-american-dynamism-2/"
          >
            American Dynamism
          </a>
          .”
        </p>
        <p className="">
          Allegations of stagnation have also become less heterodox. A 2019{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theatlantic.com/science/archive/2019/07/we-need-new-science-progress/594946/"
          >
            petition
          </a>{" "}
          by Stripe CEO Patrick Collison and economist Tyler Cowen for “a new
          science of progress” ignited the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/Progress-Studies-101-7089d11646d144928ded1274e1b03755?pvs=21"
          >
            Progress Studies
          </a>{" "}
          community, which seeks to investigate why scientific and technological
          progress happens and how to make it happen faster. Critiques of the
          scientific process have led to the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.biotechniques.com/technology-news/the-rise-of-metascience/"
          >
            growth
          </a>{" "}
          of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://scienceplusplus.org/metascience/"
          >
            metascience
          </a>
          , the field of research on how to improve the scientific process
          itself.
        </p>
        <p className="">
          Many new institutions have emerged from these intellectual strands.
          The NSF’s $880M{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://beta.nsf.gov/tip/latest"
          >
            Technology, Innovation, and Partnerships
          </a>{" "}
          directorate, the DoD’s{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.diu.mil/about"
          >
            Defense Innovation Unit
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/live/zNeSoU0f5fI?feature=share"
          >
            Office of Strategic Capital
          </a>
          , and the UK’s £800M{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aria.org.uk/"
          >
            Advanced Research + Invention Agency
          </a>{" "}
          aim to unshackle innovation from traditional bureaucracies. Schmidt
          Futures,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://arcinstitute.org/"
          >
            Arc Institute
          </a>
          , Open Philanthropy,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://archive.li/uOW7y"
          >
            Yosemite
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://newscience.org/"
          >
            New Science
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goodscienceproject.org/"
          >
            Good Science Project
          </a>
          , Arnold Ventures, and other funders are experimenting with new ways
          of doing science, incubating and backing{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://12ft.io/proxy?q=https%3A%2F%2Fwww.theatlantic.com%2Fideas%2Farchive%2F2022%2F01%2Fscientific-funding-is-broken-can-silicon-valley-fix-it%2F621295%2F"
          >
            projects
          </a>{" "}
          like{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.convergentresearch.org/"
          >
            Convergent Research
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://frontierclimate.com/"
          >
            Frontier Climate
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cos.io/"
          >
            Center for Open Science
          </a>
          , UChicago’s{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marketshaping.uchicago.edu/"
          >
            Market Shaping Accelerator
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.arcadiascience.com/"
          >
            Arcadia Science
          </a>
          , and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://spec.tech/"
          >
            Speculative Technologies
          </a>
          . A slew of publications such as{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rootsofprogress.org/"
          >
            Roots of Progress
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://worksinprogress.co/"
          >
            Works in Progress
          </a>
          , and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fasterplease.substack.com/"
          >
            Faster Please!
          </a>{" "}
          document critical lessons from the history of science and technology.
          Think tanks like the{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://fas.org/">
            Federal of American Scientists
          </a>{" "}
          and the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://progress.institute/"
          >
            Institute for Progress
          </a>{" "}
          translate ideas into policies, resulting in the creation of{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dayoneproject.org/ideas/creating-the-health-advanced-research-projects-agency-harpa/"
          >
            ARPA-H
          </a>
          , NSF’s TIP—the first NSF directorate to be created in almost 30
          years—and other new departments with a mandate to innovate.
        </p>
        <p className="">
          These groups all place science and technology at the heart of national
          prosperity — and recognize our agency in determining the future.
        </p>
        <p className="">
          What led to this nationwide emphasis on science and technology not
          seen in decades? This question deserves an in-depth exploration of its
          own, but some driving forces include:
        </p>
        <ul className="">
          <li>
            <strong>Intensifying geopolitical competition</strong> makes
            leadership in dual-use technologies critical to safeguarding
            economic and national security interests
          </li>

          <li>
            <strong>Rising costs of core social goods </strong>such as
            healthcare, higher education, and housing are becoming prohibitive
            for middle and lower classes
          </li>

          <li>
            <strong>Decades of offshoring manufacturing </strong>have produced
            supply chain vulnerabilities, workforce dislocation, and loss of{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://americancompass.org/wheres-the-growth/#:~:text=The%20obvious%20consequence%20of%20stalled%20manufacturing%20output%20has%20been%20a%20plunge%20in%20jobs."
            >
              know-how
            </a>
          </li>

          <li>
            <strong>Global challenges demanding R&amp;D at scale </strong>
            are becoming more prevalent. Covid highlighted the life-saving
            stakes of fast R&amp;D. Climate change presents global risks for
            energy and food insecurity. Emerging{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7153315/"
            >
              biological weapons
            </a>{" "}
            require better methods for detection and protection than we
            currently have available.
          </li>
        </ul>
        <p className=""></p>
      </Text>
      <div>
        <figure>
          <img className="hidden md:inline-block" src="/letter-chips.png" />

          <img
            className="md:hidden inline-block px-5"
            src="letter-chips-sm.png"
          />
        </figure>
      </div>
      <Text>
        <p className="">
          <a href="https://computerhistory.org/blog/indigenous-circuits/">
            <em>Source</em>
          </a>
          <em>
            : Ribbon cutting at Fairchild Building Dedication, Shiprock, New
            Mexico, September 8, 1969
          </em>
        </p>
        <p className="">
          Of course, material innovation is not the best or only way to solve
          these problems. The easiest solution to reduce housing costs requires
          zero science or technology—we can simply{" "}
          <a href="https://harvardlawreview.org/print/vol-135/addressing-challenges-to-affordable-housing-in-land-use-law/#:~:text=Restrictive%20zoning%20rules%2C%20like%20single%2Dfamily%20zoning%2C%20reduce%20the%20supply%20of%20land%20available%20for%20new%20housing%2C%20which%20in%20turn%20inflates%20the%20cost%20of%20new%20housing%20projects">
            update zoning laws
          </a>{" "}
          to allow more housing projects. Similarly, healthcare costs could be
          lowered through policy maneuvers alone, perhaps by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.advisory.com/daily-briefing/2022/02/16/physician-shortage#:~:text=In%201981%2C%20a,residency%20training%20programs."
          >
            removing artificial limits
          </a>{" "}
          on physician supply or{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.vox.com/2015/9/25/9397069/bernie-sanders-drug-prices"
          >
            redesigning
          </a>{" "}
          the drug patent system. However, in the absence of those policies,
          material innovation—such as cheaper housing materials or automating
          drug discovery with AI—are potential avenues to reduce marginal costs.
        </p>
        <blockquote className="">
          <em>
            Science can be effective in the national welfare only as a member of
            a team, whether the conditions be peace or war. But without
            scientific progress no amount of achievement in other directions can
            insure our health, prosperity, and security as a nation in the
            modern world.
          </em>{" "}
          —{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nsf.gov/od/lpa/nsf50/vbush1945.htm#:~:text=Science%20can%20be%20effective%20in,nation%20in%20the%20modern%20world."
          >
            Vannevar Bush
          </a>
        </blockquote>
        <h3 className="">
          <strong>A Timely Collection</strong>
        </h3>
        <p className="">
          Most existing scholarship about innovation resides in business school
          case studies. Their goal is limited to comprehension, to explain why
          one organization succeeded where others failed. Our goal is to take
          the next step—to help institutions assimilate the systemic factors
          that lead to outperformance in innovation. As Patrick Collison and
          Tyler Cowen{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theatlantic.com/science/archive/2019/07/we-need-new-science-progress/594946/#:~:text=Organizations%20as%20varied,of%20human%20organizations"
          >
            call out
          </a>
          :
        </p>
        <p className="">
          <em>
            “Organizations as varied as Y Combinator, MIT’s Radiation Lab, and
            ARPA have astonishing track records in catalyzing progress far
            beyond their confines. These examples collectively indicate that one
            of our highest priorities should be figuring out interventions that
            increase the efficacy, productivity, and innovative capacity of
            human organizations.”
          </em>
        </p>
        <p className="">
          Through our work and reading, we’ve come across some deeply inspiring
          organizations, interventions, and experiments. Our goal is that by
          aggregating these levers into an easily accessible directory, we can
          help institutions of all kinds—including federal and local
          governments, universities, funding agencies, philanthropies, and
          companies—take inspiration and ingest them faster.
        </p>
        <p className="">Let's get to work.</p>
        <blockquote className="">
          <em>&quot;Where there is no vision, the people perish.&quot; —</em>{" "}
          Proverbs 29:18.
        </blockquote>
      </Text>
      <Button className=" mb-32" />
    </div>
  );
}
