export type MessengerPlatform = 'telegram' | 'whatsapp' | 'wechat' | 'email'
export type ClickLocation = 'header' | 'hero' | 'contact_section' | 'footer' | 'floating'
export type InteractionType = 'click' | 'hover' | 'copy'

const YANDEX_METRIKA_ID = 105783207

export const trackLead = (
  platform: MessengerPlatform,
  location: ClickLocation,
  action: InteractionType = 'click'
) => {
  const colors = {
    click: 'background: #2397d0; color: white',
    hover: 'background: #fff176; color: black',
    copy: 'background: #07C160; color: white'
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'contact_interaction', {
      messenger_platform: platform,
      interaction_type: action,
      click_location: location,
      event_category: 'conversion',
      value: action === 'click' ? 1.0 : 0.2
    })

    console.log(`%c[GA4 Event]%c ${platform.toUpperCase()} | ${action.toUpperCase()} | ${location}`, colors[action] || '', 'font-weight: bold; color: inherit')
  }

  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(YANDEX_METRIKA_ID, 'reachGoal', 'messenger_click', { platform, action, location })
  }
}
