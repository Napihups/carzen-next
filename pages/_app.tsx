import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalCssPriority } from "@common/GlobalCssPriority";
import { CzRangeSlider } from "@cz-ui/CzRangeSlider/CzRangeSlider";
import { DesignCanvas } from "@common/DesignCanvas";
import { formatCurrency } from "@lib/currency-format";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalCssPriority>
      <DesignCanvas>
        <CzRangeSlider
          marks={[
            {
              value: 0,
              label: "$0",
            },
            {
              value: 500000,
              label: "$500,000",
            },
          ]}
          valueLabelFormat={(value: number) => {
            return formatCurrency(value);
          }}
          ariaValueText={(value: number) => {
            return formatCurrency(value);
          }}
          min={0}
          initialMin={0}
          max={500000}
          initialMax={500000}
        />
      </DesignCanvas>
    </GlobalCssPriority>
  );
}

export default MyApp;

/* <>
  <BarLoader isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
  <Component {...pageProps} />
</> */
