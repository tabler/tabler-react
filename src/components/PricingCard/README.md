## Pricing Card Component

![image](https://user-images.githubusercontent.com/12032251/39137635-c8b0ad40-4726-11e8-9f0d-6fe256aba173.png)

### Usage

```jsx
import { PricingCard } from 'tabler-react'
...
...

<PricingCard>
    <PricingCard.Category>{"Free"}</PricingCard.Category>
    <PricingCard.Price>{"$0"} </PricingCard.Price>
    <PricingCard.AttributeList>
        <PricingCard.AttributeItem>
            <strong>3 </strong>
                      {"Users"}
         </PricingCard.AttributeItem>
         <PricingCard.AttributeItem hasIcon available>
                      {"Sharing Tools"}
         </PricingCard.AttributeItem>
         <PricingCard.AttributeItem hasIcon available={false}>
                      {"Design Tools"}
         </PricingCard.AttributeItem>
         <PricingCard.AttributeItem hasIcon available={false}>
                      {"Private Messages"}
          </PricingCard.AttributeItem>
          <PricingCard.AttributeItem hasIcon available={false}>
                      {"Twitter API"}
          </PricingCard.AttributeItem>
    </PricingCard.AttributeList>
    <PricingCard.Button>{"Choose plan"} </PricingCard.Button>
</PricingCard>
```
