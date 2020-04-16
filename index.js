
import { decrementButton, incrementButton, counterBlock, wrapper, controlPanel, resetButton, Counter }  from './modules'


const counter = new Counter() 

counter.onChange(currentValue => {
  counterBlock.update([currentValue])
})



document.body.append(
     wrapper.render([
        counterBlock.render([counter.currentValue]),
        controlPanel.render([
            decrementButton.onClick(() => counter.decrement()).render(['-']),
            resetButton.onClick(() => counter.reset()).render(['#']),
            incrementButton.onClick(() => counter.increment()).render(['+'])
        ])
    ])
 )