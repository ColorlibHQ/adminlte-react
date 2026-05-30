import { cn } from '../lib/class-name'

export interface CarouselSlide {
  src?: string
  alt?: string
  /** Custom slide content (used instead of an image). */
  content?: React.ReactNode
  caption?: { title?: React.ReactNode; text?: React.ReactNode }
}

export interface CarouselProps {
  /** Required: unique id used to wire controls/indicators. */
  id: string
  slides: CarouselSlide[]
  controls?: boolean
  indicators?: boolean
  /** Auto-cycle. `true` starts after first interaction; `'carousel'` starts on load. */
  ride?: boolean | 'carousel'
  /** Crossfade instead of slide. */
  fade?: boolean
  interval?: number
  className?: string
}

/**
 * Bootstrap carousel (driven by the Bootstrap JS bundle). Pass a unique `id`.
 */
export function Carousel({
  id,
  slides,
  controls = true,
  indicators = true,
  ride,
  fade,
  interval,
  className,
}: CarouselProps) {
  return (
    <div
      id={id}
      className={cn('carousel slide', fade && 'carousel-fade', className)}
      data-bs-ride={ride === true ? 'true' : ride || undefined}
      data-bs-interval={interval}
    >
      {indicators && (
        <div className="carousel-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : undefined}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div key={idx} className={cn('carousel-item', idx === 0 && 'active')}>
            {slide.content ?? (
              <img src={slide.src} alt={slide.alt ?? ''} className="d-block w-100" />
            )}
            {slide.caption && (
              <div className="carousel-caption d-none d-md-block">
                {slide.caption.title && <h5>{slide.caption.title}</h5>}
                {slide.caption.text && <p>{slide.caption.text}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {controls && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  )
}
