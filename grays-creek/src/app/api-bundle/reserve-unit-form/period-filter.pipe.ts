import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'periodFilter'
})
export class PeriodFilter implements PipeTransform{
    transform(LstRentalPeriod) {
        // if(LstRentalPeriod.PeriodDescription === "Monthly" || LstRentalPeriod.PeriodDescription === "Quarter" || LstRentalPeriod.PeriodDescription === "Annual"){
        //     return LstRentalPeriod.PeriodDescription;
        // }
        return LstRentalPeriod.filter(x=>x.PeriodDescription === 'Monthly' || x.PeriodDescription === "Quarter" || x.PeriodDescription === "Annual"
        )
    }
} 