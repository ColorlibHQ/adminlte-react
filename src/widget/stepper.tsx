import { cn } from '../lib/class-name'

export interface Step {
  label: React.ReactNode
  description?: React.ReactNode
  /** Bootstrap icon class for the marker (e.g. `bi-person`); defaults to a number/check. */
  icon?: string
}

export interface StepperProps {
  steps: Step[]
  /** 0-based index of the current step. Earlier steps render as complete. */
  active: number
  orientation?: 'horizontal' | 'vertical'
  /** Makes markers clickable. */
  onStepClick?: (index: number) => void
  className?: string
}

type State = 'complete' | 'active' | 'upcoming'

/** A progress stepper (wizard). Pure/controlled — drive `active` from parent state. */
export function Stepper({ steps, active, orientation = 'horizontal', onStepClick, className }: StepperProps) {
  const vertical = orientation === 'vertical'

  const marker = (state: State, index: number, icon?: string) => {
    const bg =
      state === 'complete' ? 'text-bg-success' : state === 'active' ? 'text-bg-primary' : 'text-bg-secondary'
    const content = icon ? (
      <i className={cn('bi', icon)} aria-hidden="true" />
    ) : state === 'complete' ? (
      <i className="bi bi-check-lg" aria-hidden="true" />
    ) : (
      index + 1
    )
    const cls = cn(
      'd-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 fw-semibold',
      bg,
      state === 'upcoming' && 'opacity-75'
    )
    const style = { width: 38, height: 38 }
    return onStepClick ? (
      <button
        type="button"
        className={cn(cls, 'border-0')}
        style={style}
        onClick={() => onStepClick(index)}
        aria-label={`Go to step ${index + 1}`}
      >
        {content}
      </button>
    ) : (
      <span className={cls} style={style}>
        {content}
      </span>
    )
  }

  return (
    <ol
      className={cn(
        'list-unstyled d-flex mb-0',
        vertical ? 'flex-column gap-3' : 'flex-row align-items-start',
        className
      )}
    >
      {steps.map((step, idx) => {
        const state: State = idx < active ? 'complete' : idx === active ? 'active' : 'upcoming'
        return (
          <li
            key={idx}
            className={cn('d-flex', vertical ? 'flex-row gap-3' : 'flex-column align-items-center text-center flex-fill')}
            aria-current={state === 'active' ? 'step' : undefined}
          >
            <div className={cn('d-flex align-items-center', !vertical && 'w-100 justify-content-center')}>
              {marker(state, idx, step.icon)}
            </div>
            <div className={cn(vertical ? '' : 'mt-2')}>
              <div className={cn('fw-semibold', state === 'upcoming' && 'text-secondary')}>{step.label}</div>
              {step.description && <div className="small text-secondary">{step.description}</div>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
