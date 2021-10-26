import React from 'react';
import { SlideDeck } from './components/SlideDeck';
import theme from './theme.module.scss';

// TODO: Move out to code slide
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import TitleSlide from './components/TitleSlide';
import Slide from './components/Slide';

const title = 'Unit Testing with Angular';

function App() {
  const slides = [
    /**
     * INTRODUCTION
     */
    <TitleSlide title={title} subtitle="Harrison Kelly" />,

    /**
     * WHAT ARE UNIT TESTS?
     */
    <TitleSlide title="what are they?" secondary>
      <img
        src="https://media.giphy.com/media/V4uGHRgz0zi6Y/source.gif"
        alt=""
        style={{ height: '500px', paddingTop: '50px' }}
      />
    </TitleSlide>,

    <Slide
      title="Power 🔨"
      subtext="Use them to be able to"
      notes="Unit tests enable developers to prevent regressions by having simple to write and quick to run test cases to make sure that their code is running properly. This allows for code to safely be refactored
      without having to worry that someone else is using the same code and you now broke their application (assuming that code has good unit testing). It is also a way to document how a function should work and what
      the expected outputs are."
    >
      <ul>
        <li className={theme['with-bullet']}>
          Prevent regressions during refactoring
        </li>
        <li className={theme['with-bullet']}>
          Additional form of finishing a feature
        </li>
        <li className={theme['with-bullet']}>Document code</li>
      </ul>
    </Slide>,

    <TitleSlide secondary title="What should be tested 🤨"></TitleSlide>,

    <Slide title="EVERYTHING">
      <img
        style={{ height: '500px' }}
        src="https://media.giphy.com/media/1FR40e3b76Jnq/giphy.gif?cid=ecf05e47d4abi9ebzluxutk4urjd734wkdd9aqsmeai3mivz&rid=giphy.gif&ct=g"
      />
    </Slide>,

    <Slide title="Joking..."></Slide>,

    <Slide title="Sort of...">
      <p>
        Unit tests should cover everything that is testable. Think of it as a
        way to write rules your code has to follow.
      </p>
    </Slide>,

    <Slide title="⚠ Scope!">
      <img src="https://media.giphy.com/media/2tKbtEbIEsT6NpvoUw/giphy.gif"></img>
    </Slide>,

    <Slide animate={false} title="⚠ Scope!">
      <p>Unit tests should <strong>ONLY</strong> test one "unit". Unit tests for a component shouldn't make sure that a service is making the correct API call(s).</p>
      <p>You need to test that the service is called, but not what the service's method is doing.</p>
    </Slide>,

    <Slide title="But no one likes unit testing...">
      <img
        style={{ height: '400px' }}
        src="https://media.giphy.com/media/Js1qlQiDvj9ubktynP/giphy.gif"
      ></img>
    </Slide>,

    <Slide title="I know" notes="Unit tests give developers a quick way to know if their changes broke something. With good coverage, you can safely know that your
    changes did not break other areas of the app. There are some holes though and they shouldn't be used without actual browser/QA testing.">
      <p>
        But if we want to have a stable code base and not be up late at night
        fixing critical bugs 😴...
      </p>
    </Slide>,

    <TitleSlide tertiary title="You have to write them"></TitleSlide>,

    <TitleSlide tertiary title="Okay...but how do I write one? 🤔" />,

    /**
     * WHERE SHOULD UNIT TESTS BE?
     */
    <TitleSlide secondary title="Where to test"></TitleSlide>,

    <Slide notes="Testing the implementation directly leads to tests that break because code behind the scenes changed. This is a bad practice, especially when the
    code didn't change how the component functions.">
      <p>You want to test your code at the point furthest from the implementation.</p>
    </Slide>,

    <Slide animate={false}>
      <p>You want to test your code at the point furthest from the implementation.</p>
      <p style={{textAlign: 'left'}}>This is usually through the template/view layer.</p>
    </Slide>,

    <Slide animate={false}>
    <p>You want to test your code at the point furthest from the implementation.</p>
    <p>This is usually through the template/view layer.</p>
    <p>This layer is the least connected to the implementation and won't break if the component changes (usually 😀).</p>
    </Slide>,

    <TitleSlide tertiary title="Example">
      <img style={{height: '300px'}} src="https://media.giphy.com/media/g7SFZQGzS4HwQ/giphy.gif?cid=ecf05e476vafhdtttonfp41b7n3txl35cxh4hdn2i7ucje0w&rid=giphy.gif&ct=g"></img>
    </TitleSlide>,

    <Slide>
      <p>Let's say you have a component that finds all of the advisors for a specific household.</p>
    </Slide>,

    <Slide animate={false} notes="This is a classic example where the name of the household and the advisors are retrieved from API calls, formatted, and displayed
    in the front end.">
      <p>Let's say you have a component that finds all of the advisors for a specific household.</p>

      <div style={{backgroundColor: '#eee', padding: '10px', border: '1px solid #ddd'}}>
        <div style={{fontSize: '14pt'}}>Advisors in Household <strong>PEEKE HOUSE</strong></div>
        <ul>
          <li className={theme['with-bullet']}>Laura Peeke</li>
          <li className={theme['with-bullet']}>Joe Peeke</li>
          <li className={theme['with-bullet']}>Sam Peeke Jr.</li>
        </ul>
      </div>
    </Slide>,

    <Slide>
      <p>This would require the following unit tests</p>
    </Slide>,

    <Slide animate={false} notes="Testing this would require tests to be written that make sure that the correct household and advisors are displayed.">
      <p>This would require the following unit tests</p>

      <div style={{width: '75%', fontSize: '20pt', textAlign: 'center', color: '#666'}}>
        <pre>Should display the correct household name</pre>
        <pre>Should display the correct advisors in the household</pre>
      </div>
    </Slide>,

    <Slide title="These tests would look like">

      <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`it('should display the correct household name', () => {
  fixture.detectChanges(); // Call ngOnInit.
  const householdName = fixture.nativeElement.querySelector('#household-name');
  expect(householdName.textContent()).toEqual('PEEKE HOUSE');
}`}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`it('should display the correct advisors', () => {
  fixture.detectChanges(); // Call ngOnInit.
  const advisorsList = fixture.nativeElement.querySelector('#advisors-list');
  expect(advisorsList.textContent())
    .toEqual('Laura Peeke Joe Peeke Sam Peeke Jr.');
}`}
      </SyntaxHighlighter>
    </Slide>,

    <Slide title="✋ WAIT">
      <p>It's important to note that we aren't looking at properties in the component.</p>
    </Slide>,

    <Slide title="✋ WAIT" animate={false}>
      <p>It's important to note that we aren't looking at properties in the component.</p>

      <p>You could rewrite these tests to tie them to the implementation...</p>
    </Slide>,

  <Slide title="🙅‍♂️ BAD TESTS">

  <SyntaxHighlighter
    language="typescript"
    theme={docco}
    customStyle={{ fontSize: '1.35rem' }}
  >
    {`it('should display the correct household name', () => {
    fixture.detectChanges(); // Call ngOnInit.
    const { householdName } = component;
    expect(householdName).toEqual('peeke household');
  }`}
  </SyntaxHighlighter>

  <SyntaxHighlighter
    language="typescript"
    theme={docco}
    customStyle={{ fontSize: '1.35rem' }}
  >
    {`it('should display the correct advisors', () => {
    fixture.detectChanges(); // Call ngOnInit.
    const { advisorsList } = component;
    expect(advisorsList).toEqual([
      'Laura Peeke',
      'Joe Peeke',
      'Sam Peeke Jr.');
  }`}
  </SyntaxHighlighter>
  </Slide>,

  <Slide title="😔">
    <p>These are bad tests for multiple reasons</p>
  </Slide>,

  <Slide title="😔" animate={false}>
    <p>These are bad tests for multiple reasons</p>

    <p>If the component changes how it retrieves/stores the data, the tests could need to be rewritten.</p>
  </Slide>,

    <TitleSlide secondary title="The Basics">
      <img src="https://media.giphy.com/media/de4QmZqpcqQMOPL2Mt/giphy.gif" alt="Building Blocks" />
    </TitleSlide>,

    <Slide
      title="detect Changes"
      notes="Calling fixture.detectChanges() is how you initialize your component for the first time. It is considered an anti-pattern to call 'component.ngOnInit', since Angular itself
  is responsible for calling that. If you need to call ngOnInit explicitly, you should look into how your test is structured and think about setup before the fixture detectChanges call. Make sure to call detectChanges
  every time you need the view to be updated."
    >
      <p className={theme.subtitle}>Use it as a way to update your view.</p>
      <div style={{ textAlign: 'center' }}>
        <div>
          ⛔ Do <strong>NOT</strong> call{' '}
          <pre className="code" style={{ display: 'inline-block' }}>
            ngOnInit()
          </pre>{' '}
          directly for this.
        </div>
        <div>✅ Do call it before checking the view for changes</div>
      </div>
    </Slide>,

    <Slide title="Example">
      <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`it('should show the button', () => {
  fixture.detectChanges(); // Call ngOnInit.
  component.shouldShowButton = true;

  fixture.detectChanges(); // Update the view.
  const button = fixture.nativeElement.querySelector('#my-button');
  expect(button).toBeTruthy(); // Assert the button is in the DOM.
})`}
      </SyntaxHighlighter>
    </Slide>,

    <Slide animate={false} title="Example">
      <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`it('should show the button', () => {
  fixture.detectChanges(); // Call ngOnInit.
  component.shouldShowButton = true;

  fixture.detectChanges(); // Update the view.
  const button = fixture.nativeElement.querySelector('#my-button');
  expect(button).toBeTruthy(); // Assert the button is in the DOM.
})`}
      </SyntaxHighlighter>

      <p>
        Updating the component's{' '}
        <pre className="code" style={{ display: 'inline-block' }}>
          shouldShowButton
        </pre>{' '}
        property updates the view.
      </p>
    </Slide>,


  <Slide title="Querying...🔍" notes="Querying allows you to interact with the DOM/template and check against what the user would see if they were running the app. This is extremely powerful because it enables you to interact with elements on the page, just as a user would, without the need to write end to end tests.">
    <p>
      Use querying as a way to interact with the template and retreive data.
    </p>
  </Slide>,

  <Slide animate={false} title="Querying...🔍" notes="">
    <p>
      Use querying as a way to interact with the template and retreive data.
    </p>
    <p>
      You can think of this as document.querySelector and document.querySelectorAll.
    </p>
  </Slide>,

  <Slide title="Querying...🔍" notes="">
    <p>
      This is exposed on the fixture in the test under fixture.nativeElement.
    </p>
  </Slide>,

  <Slide animate={false} title="Querying...🔍" notes="">
    <p>
      This is exposed on the fixture in the test under fixture.nativeElement.
    </p>
    <p>
      It can be called with fixture.nativeElement.querySelector and fixture.nativeElement.querySelectorAll.
    </p>
  </Slide>,

  <Slide title="Clicking" notes="">
    <p>You can use the return value of a query to click and interact with the DOM.</p>
  </Slide>,

  <Slide animate={false} title="Clicking" notes="">
    <p>You can use the return value of a query to click and interact with the DOM.</p>

    <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`const button = fixture.nativeElement.querySelector('#my-button');
button.click();`}
      </SyntaxHighlighter>
  </Slide>,

  <Slide title="Services...🍽" notes=""></Slide>,

  <Slide title="Getting data">
    <p>Most data is retrieved through a service, with Subscriptions.</p>
  </Slide>,

  <Slide animate={false} title="Getting data">
    <p>Most data is retrieved through a service, with Subscriptions.</p>

    <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`this.subscriptions.push(
  this.advisorService.getAdvisors().subscribe(advisors => {
    this.advisors = advisors;
  });
);`}
      </SyntaxHighlighter>
  </Slide>,

  <TitleSlide secondary title="How to test that? 🤔"></TitleSlide>,

  <Slide title="Using spies!"></Slide>,

  <Slide animate={false} title="Using spies!">
    <p>
      Spies allow you to mock the data that the service is going to return...let's look at an example...
    </p>
  </Slide>,

  <Slide animate={false} title="Using Spies!">
<SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`it('should show the count of advisors correctly', () => {
  // Grab the service from the test bed.
  const advisorService = TestBed.inject(AdvisorService);

  // Spy on the getAdvisors method to return an Observable with "fakeAdvisors".
  spyOn(advisorService, 'getAdvisors').and.returnValue(of(fakeAdvisors));

  // Call ngOnInit.
  fixture.detectChanges();

  const advisorCount = fixture.nativeElement.querySelector('#advisor-count')
  expect(advisorCount.textContent).toEqual(3);
})`}
      </SyntaxHighlighter>
  </Slide>,

  <Slide animate={false} title="Using Spies!" subtext="in your tests allows you to..">
    <ul>
      <li className={theme['with-bullet']}>Mock data</li>
      <li className={theme['with-bullet']}>Create test scenarios</li>
      <li className={theme['with-bullet']}>Test methods are called</li>
      <li className={theme['with-bullet']}>Limit testing to the scope of the suite</li>
    </ul>
  </Slide>,

    
  <Slide title="More Spies...🕵️‍♀️" notes=""></Slide>,

  <Slide animate={false} title="More Spies...🕵️‍♀️" notes="">
    <p>Spies allow you to setup the component with whatever data you want.</p>
  </Slide>,

  <Slide animate={false} title="More Spies...🕵️‍♀️" notes="">
    <p>Spies allow you to setup the component with whatever data you want.</p>
    <p>This can be API data, Inputs, or even data entered into a form.</p>
  </Slide>,

  <Slide tertiary title="Lets look at more examples"></Slide>,

  <Slide title="Outputs">
    <p>Let's say you want to see if an Output emitted the correct value.</p>
  </Slide>,

  <Slide animate={false} title="Outputs">
    <p>Let's say you want to see if an Output emitted the correct value.</p>
    <p>You could do that with the following test...</p>
  </Slide>,

  <Slide animate={false} title="Outputs">
    <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`it('should emit the change to the parent component', () => {
  // Create the spy.
  const spy = spyOn(component.onAdvisorChanged, 'emit');

  // Get the checkbox.
  const advisorId = '112233';
  const checkboxId = '#advisor-checkbox-' + advisorId;
  const advisorCheckbox = fixture.nativeElement.querySelector(checkboxId);

  // Click the checkbox.
  advisorCheckbox.click();

  // Assert.
  expect(spy).toHaveBeenCalledWith(advisorId);
})`}
      </SyntaxHighlighter>
  </Slide>,

  <Slide title="⚠ Notice!">
    <p>Here we spied on the "emit" method <strong>inside</strong> of the Output, not the Output itself.</p>

    <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`const spy = spyOn(component.onAdvisorChanged, 'emit');`}
      </SyntaxHighlighter>
  </Slide>,

  <Slide title="APIs...📞" subtext="Testing data from an outside source" notes=""></Slide>,

  <Slide title="Testing HTTP Calls">
    <p>It's important to test that HTTP calls are made when you call services.</p>
  </Slide>,

  <Slide animate={false} title="Testing HTTP Calls">
    <p>It's important to test that HTTP calls are made when you call services.</p>
    <p>It allows you to make sure that calls are not broken by refactoring.</p>
  </Slide>,

  <TitleSlide tertiary title="Example">
    <img style={{height: '300px'}} src="https://media.giphy.com/media/g7SFZQGzS4HwQ/giphy.gif?cid=ecf05e476vafhdtttonfp41b7n3txl35cxh4hdn2i7ucje0w&rid=giphy.gif&ct=g"></img>
  </TitleSlide>,

  <Slide title="Let's say you have...">
    <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`getAdvisors() {
  return this.http.get<IAdvisor>('/api/advisors');
}`}
      </SyntaxHighlighter>
  </Slide>,

  <Slide animate={false} title="Let's say you have...">
    <SyntaxHighlighter
        language="typescript"
        theme={docco}
        customStyle={{ fontSize: '1.35rem' }}
      >
        {`getAdvisors() {
  return this.http.get<IAdvisor>('/api/advisors');
}`}
      </SyntaxHighlighter>
    <p style={{display: 'block'}}>How do you test that?</p>
  </Slide>,

<Slide title="The test">
  <SyntaxHighlighter
      language="typescript"
      theme={docco}
      customStyle={{ fontSize: '1.35rem' }}
    >
      {`beforeEach(() => {
  // Add HttpClientTestingModule to catch API calls.
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  });
});
    
it('should call /api/advisors when getAdvisors() is called', (done) => {
  // Subscribe to the service method and call done when it's completed
  // since it is asynchronous.
  servce.getAdvisors().subscribe(() => done());

  // Pull the HTTP client from the testbed.
  const httpClientTesting = TestBed.inject(HttpTestingController);
  const req = httpClientTesting.expectOne({
    method: 'GET', url: '/api/advisors'
  });

  const mockAdvisor = { name: 'John Smith', id: 112233 };
  // Flush the request to make it return the data, calling the subscription above.
  req.flush([mockAdvisor])
})`}
  </SyntaxHighlighter>
</Slide>,

  <Slide title="Tips 📝" notes="">
    <ul>
        <li className={theme['with-bullet']}>
          Write your tests along with your code
        </li>
        <li className={theme['with-bullet']}>
          When testing multiple cases, use forEach and pass data into the "it"
        </li>
        <li className={theme['with-bullet']}>Always try to write your code from the template</li>
        <li className={theme['with-bullet']}>When in doubt, "console.log" <strong>everything</strong></li>
      </ul>
  </Slide>,

  <Slide title="Common Pitfalls" notes="">
    <ul>
      <li className={theme['with-bullet']}>Your code just isn't written in a way that can be tested easily</li>
      <li className={theme['with-bullet']}>Writing too close to the implementation (aka private methods..) and having to constantly rewrite tests</li>
      <li className={theme['with-bullet']}>Not adding IDs on elements that are hard to get</li>
      <li className={theme['with-bullet']}>Not adding components to the TestBed, resulting in them being unreachable</li>
    </ul>
  </Slide>,
  ];

  return (
    <div>
      <SlideDeck title={title} theme={theme} slides={slides} showNavigation />
    </div>
  );
}

export default App;
