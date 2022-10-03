import React from "react";
import {
  Box,
  IconButton,
  Flex,
  ScrollView,
  Text,
  Badge,
} from "native-base";
import {
  FlipGlobe,
  ListrikPln,
  PaketData,
  Pulsa,
  Refund,
  SendMoney,
  TarikSaldo,
  Topup,
  Lainnya,
  Pdam,
  Funding,
} from "../Icons/products/index";

import {
  ArrowDown,
  ArrowUp,
  Calendar,
  ContactBook,
  Copy,
  Delete,
  Download,
  Edit,
  Filter,
  Gallery,
  Hamburger,
  Identity,
  Location,
  LogOut,
  Maps,
  MeatballMenu,
  Money,
  PersonalInformation,
  Phone,
} from "../Icons/function/index";

import { HStack, VStack } from "../Stack/index";
import { TopupSpecial } from "../Icons/special/index";

const PagesIconButton = () => {
  return (
    <Flex flex="1">
      <Box background="white" px="4" py="4">
        <Flex
          borderWidth="1"
          borderColor="neutral.BorderAndDisabled"
          rounded="16"
          justifyContent="space-between"
          flexDirection="row"
          p="4"
          mb="4"
        >
          <Flex flex="1">
            <Text>Saldo Flip</Text>
            <Text fontWeight="bold" fontSize="lg">
              Rp0
            </Text>
          </Flex>
          {/* <Flex alignItems="center">
            <IconButton
              p="0"
              mb="2px"
              variant="unstyled"
              _icon={{ color: "flipOrange.Main" }}
              _pressed={{
                _icon: {
                  color: "flipOrange.Plus1",
                },
              }}
              icon={<TopupSpecial size="6" />}
            />
            <Text fontWeight="bold" color="flipOrange.Main">
              Isi Saldo
            </Text>
          </Flex> */}

          <Badge
            type="va"
            colorScheme="jadeGreen"
            _box={{
              position: "absolute",
              alignSelf: "center",
              top: -1,
              right: 12,
            }}
            label={"Gratis 3x bulan ini"}
          />
        </Flex>
        {/* <BalanceCard
          emoneyImage={{
            uri: "data:image/jpeg;base64,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",
          }}
          emoneyImageProps={{
            height: "25px",
            width: "90px",
          }}
          koinLabel="Koin flip"
          koinValue="Rp100.000"
          onFailPressed={() => {}}
          onInfoPress={function noRefCheck() {}}
          onProcessingPressed={function noRefCheck() {}}
          saldoLabel="Saldo  Flip"
          saldoValue="Rp0"
          mb={"4"}
        />
        <BalanceCard
          emoneyImage={{
            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhIWFhUVEBUWGBYWFhUVGBgXFxcWHBYYGBgYHiohGxsmKBcYIjIkJiosLzAvFyE0OzQuOCkuLywBCgoKDg0OHBAQHDAmIScuLi8sLjYuLi4wMCwuLi4wMTA2MywuLi4xLi8uLi4wMDAuLi8uLi4sMCwuLi4uLi4uLv/AABEIAH0BlAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EAEcQAAEDAQQGBQgFCgYDAAAAAAEAAgMRBAUGMRIhQVFhkQcTcYGyIjI0UnOhsdFCU2JyghQzdIOis8HC4fAVFiMkkvFDY9L/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EADIRAAIBAgMDCwQCAwAAAAAAAAABAgMRBCExBUFxEhRRYYGRobHB0fAiMuHxE1IGI4L/2gAMAwEAAhEDEQA/ALxREQBEWnb7fHAzTlcGjjmTuA2lND1Jt2RuLHLIGiriAN5NAq/vjHT3VbZ26A9Zwq7lWg96ilst0kp0pHucftEla0sVFfbmWtHZFWec3yfF+3iW1NiCys1OnZ3HS+FVi/zTY/r2/tfJVAvhUXOpdBurY1HfJ+HsXTZ77s8mpk8ZO7SAPIroBUMt2773ngNY5XDhWo7wdS9ji/7IiqbF/pPvXqvYu1FA7lx8CQy0Np/7GDV+IfLkptZ52vaHscHNIqCDUFbUKkZrIqcRhatB2qLt3d5mREWZrhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERc6/L1ZZoXSv2agPWccgEbtmepOTSW81sQ38yysqfKe7zWb+J3NVYXneMloeZJXVOzcBuA2Ba9uvB88jpZDVzj3AbAOAWIFVtWq5vqOpwWDjh431lvft8zBQr6vKhN88lCi+FD0LyV6XleGQXXw/iGWyvq01YT5TDkezceK5C+L1Np3RjOEakXGSumXddN5x2iMSxmoOY2tO0Eb1vqmMMX46yyhw1sdQPbvG8cRsVwwTNe1r2mrXNBB3g5Kyo1f5F1nJ47BPDTy+16e3zUzIiKY0QiIgCIiAIiIAiKqsZ3hMy2StbLI0DRoA9wHmt2AoC1UXKwzIXWSBziSTC0kk1JNNpK6qAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAqt6QL162cwA+REKdrj5x7suasa87WIYpJT9Bjnd4GoKkS8kkk1JNSd5OZWE3uKraldxjGEd+fdp459hhBodE7TzWdrlhnZUVGY+ABXyKSqrqkeSzttj7R57hlN/cspcfzr4bjZBWSGFz3BjGlzjkAKkr5YrO6V7YmCrnGgHz4KxoYYLthqfKe7UT9J7tw3NH961nh8POtLkxNnHY+GFjd5v5m+rzI/YcDTvFZHtj4a3u76ahzK3z0fj6819mP8A6XKvHE1olJo/q2+qzVzdmVzheMw19a//AJu+a6CnsHL6mvF+xy9T/Ia7lk32Jeqb7zrWvA8rNbXh44NNeRPwXMFwH1/2f6rrXVi6aMgS/wCozjTTHYdvfzUqngjtDBPEa1FajbTMEesqbaWycRh1yqb9b8G1e/U9dxvYTbkqjtJ+X6t1ogQw6frP2f6r0MNH6z9n+qlDYgvYYuW55V3PwXsW/OanSRT/ACufrP2f6qbYMY6OMwOfpBpqzVSgOYz36+8rV0VnsUmg9rt2fYc1NhsfUhVi5PK+eS07jXxM5VqbhJ339pKkRF1pQBERAEWhe16R2aMyymgyAGsuO5o2lV7eeO7RISIqRN2UAc6nEu1cggLRRUy3E9rrX8pfXtB9xFF37lx7I0htpAe312gBw4kDUR2UQFjqosc+my/g8DVa8EzXtD2EOa4AgjIg5KqMc+my/g8DUBY+FPQ7P7FvwXWVeuxcLNZYIYgHS9QwuJ81lRUDVm7hsUdmxVa3GptDhwbRo5AIC5EVW3Rji0RuAlPWs21ADwOBFK96smwWtk0bZYzVrhUH58UBsoorja/pbL1XVaPl6ddIVy0aU18Vo3ZjQiyumnAc/rixjGDRrRjDrzoBpZoCcIqltmNLY81EgjHqsa2nNwJ96mmB7ZaJoXSzv0gX0ZVrQaDM+SBXXq7kBJkUYxLiyOynq2DrJaZV8lu7SO/gPcoRbMX2x5r12gNzAGjnn70BbyKnrLiy1sNROXcHaLgeYqplhvGjZ3CKYBkh1AjzHHdr1goCXoigGKMWWiz2mSGPQ0W6NKtqdbGk668UBP0UHvPG/Vwxhga+d0THPP0GFzQcq6zwUTmxVa3GptDhwbRo5AIC5EVY3LjmaNwFoPWR7TQB7eIpQHsPNSfEeLY7O1ojpJI9oc0V8kNOTnHjsHwQEnRU9a8W2t5qZy3gyjQOWvmVsXdjO1ROBc/rW7WvA9zgKg8+xAWyi0LovNlpibNHkcwc2kZg8VuuNNZyQHpFAb/x2Q4x2UA0NDI4VB+4N3E8lGJMUWsmptL68CGjkBRAXKiqq7cb2qMjTcJW7Q4AGnBzR8aqwrkvmO1R9ZGctTmnzmncfmgOmiIgIx0hzaNjePWewe/SPhVVVVm9J3ojf0hvhkVYKKepz21H/v7F6n0lYXjRNdhy4VrqWZeXiopvy+9sUM48pE2xdo8yxKlL7JZS4bn/AM+Vyc9GlhB6y0Eax/pt9xcfCOa5N/3iZ5nPr5IOiwbmjLnn3qS4EH+wdTPSm5gBQcK+2FSioue+y8bt+Rb7dqylXafS/CyXvxzPq+Ii6AogpLge8SybqSfJkBoNzwNR7wCOSjS3bhP+6gp9ezxCqixFNVKUovoJKMnGpFrpJ5eEWi87j/Z/visFFv3vm3sP8For4/tCCjippdN+9J+bO0w7vTV/lnY+UXxel8WlLQmJPZ3VY072j4LMta7/AM2z7q2V3dJ3hFvoRSTVpPiERa9ufoxvcMxG48gVIYlT4wvc2i0ONfIjJYwcAaF3eRXsopdhPCccbGzTsDpHAENdrawHIU2u31yUEuKIPtEDHZGaOvEaQrzV2oDDJZmOGi5jS3cQCOSr/F2EdBzZbKwlrnUdG0E6JORb9n4fCxkQEYwRd1os8TmT0DSQ5ja1c2vnA01UyOo71Ccc+my/g8DVbqqLHPpsv4PA1AdbAmG2Sj8pmbpNDiGMORIzcd42AcCrBNnZo6Og3R9WgpyXNwk0CxwU+qB56z8V2EBWOPriZA5k0TdFkhILRkHDXq3Aiurgur0YWolk0JOprmvH4qg+H3ra6TfRme3HgeuT0XfnZvZt8RQGz0pZQdsn8ijGGLkda5erqQxo0nuGwHVQcTT3HcpP0pZQdsn8iydF7R1cx29Y0dwb/UoCRWXDtljboiBh4uaHE9pdrXi+rWyx2Vzo2huiNFjQKDScdWrdrr3LsqFdJ8h6iJuwzVPc11PigITdF3yWucRg+U8lznnXQZucd/zKta6bigs7QI4xXa9wBce0/wABqUT6L4hpTv2hrGjsJcT8ByVgoDQvG6YZ2lssbXcaUcOxw1hVViW5XWSbq61Y4aTHbxuPEfLerkUL6T4h1ET9on0e5zHk+EIDqYLvc2mzAvNXxnQcd9PNd3j3gqCY89Ol/V/u2LtdFzzpTt2aMZ76uXFx56dL+r/dsQHTwJhxkwNpmbpNDqMYciRm47wMqdqsJ1mYW6BY0t9XRFOS5eDmAWKAD6uveSSfiu0gKmxxc7bNOOrFGSN0gNjSDRwHDI96xYQuP8rmo+vVsAL952NaDsrTkF3elPzrP92X4xrd6L2DqJXbTPTuDGkeIoCWWexxxt0GMa1tKUAACgvSHckcbW2mNobV+i8AUBqCQ6mw6qd6sJRjpE9Cd7SPxIDh9GFqOnNDsLQ8DiDQ/Ecl0Oka9THE2zsNDLUu+4NnefgVxejP0p/6O7xsWDpFkJthHqxMA76n+KA9YKw4LS4yy/mmGlMtN2dK7ht7VZcFlYxugxjWt3AADkFT9htdsYwCEzhmsjQD9HiRQLY/xG8PXtPKT5ICcYmwrFOxz42BkoBILQAHEfRcBv3qCYTvM2e0sdk1zgx44ONKnsOvuXv/ABG8PXtPKT5LmusU9S7qpa1rXQfnvyQF4osVmJLGk56IryRARrpHhrYy71JGO+I/iqrqrvvqx9fBJFtcwgfezb7wFRyinqUO1Y2qxl0ryf5R6qlV5RYFXcn3RtbRoywHPS6ym/SGi74DmVH76sBgmfGcgat4tPmn+HcuXddvfBK2ZmbTlsI2tPAqypoYLygD2Oo4ZH6THbWuG7/sKy2di1QnaWj19H83Fxh6nOaSpt/VHTrVvi7EV4i37xuSeEnTjJHrNq5p7xl30XPbrNBrO7auohJTV4u6IZJxdpZBSHBNgMk/WkeTEK1+0dTR8T3LBdWGZ5iKtMbNrnimr7LcyfcpnGYrK0WaLztGtMzTa9/bkPkFWbS2hSo0pK+ds+pe+5G5hMNKc02svNi8pKvpu1fNay+Er6vlFes61WVR73+vCx11OHIioheV9WSCPSc1u+g7tqhUXNqK1eXeZN2VyRWVtGNH2R8FnRF3sYqKUVuyKRu7uF4kZpAtORBHNe0Xp4Ue9rrNPT6UM3vY7V3GnvVy3dbGTRtmYate2o4bweIy7lFccYZdKfymAVeBR7Bm4DIt+0MqbfjDrlv6eyOIjPkk+VG4Etr2ZgoC5ly78vqOyMEklTVwAa2hcd5AJGoZqHydIkmj5NnYHby8kcqD4qMWy2T2yYF1ZJHamtaMhuaNg/soC2rqviG0isMgdQaxk4drTrCrPHPpsv4PA1T7CFxfkkVHUMr6F5GymTRwFT3kqA459Nl/B4GoCx8Keh2f2LfgusuThT0Oz+xb8F1kBD+kz0Zntx4Xrk9F352b2TfEV1ukz0Zntx4Xrk9F352b2TfEUBtdKWUHbJ/Is3Rd+am9qPCFh6UsoO2T+RZui781N7UeEICbKK9IljMlk0wNcUgefu62nxA9ylSxSxhzS1wqHAgg7QcwgKy6PbzEVoMbjRszQ0H7YPk86kdpCtJVBifDj7I8kAuhJ8l+dK5NduPxW5dOOLRE0MeBKBkXEh3/ACGfeKoC01XfSVebXOZZmmugdN/BxFGjtoSe8LWvHH072lsTGxV+lXTd3VAA5LjXHcstsko2tK1fIakDfr2u4ICXdGVjIjlmI894aOIaDU83U7io5jz06X9X+7YrRu+yMhjbEwUaxtB8zxOfequx56dL+r/dsQFiYS9Dg9kF11yMJehweyC66Ar/AKUvOs/3ZfjGt7ow9Hl/SD4GLR6UvOs/3ZfjGt7ow9Hl/SD4GICZKM9InoTvaR+IKTKM9InoTvaR+IICMdGfpT/0d3jYvfSZYy2eObY+PRrxYfk4cl46M/Sn/o7vGxTnEN0ttULonajm13quGR7Nh4FAcPo5vIPgNnJ8qJxNN7HEmvMkclMFSssM9im11jkadRGRG8HJzT/2pHZekOUCkkLHneHFnMUKAsOR4aC4mgAJJOwDMrm3XiKzWjVHKNL1XeS7uBz7lXN+4tntLTGaRxnNra6/vOOY5Lq4Gw25z22qZtGN1xg5udsdTcMxvNEBY6IiAKo8e3T1FpLwPJmq5u4H6Teev8StxcjEl0NtULojqd5zHeq4ZHs2HgVjJXRqYzD/AM9JxWuq4lKoslpgdE90cjdF7TRwOwrEoTl9NT6tm77wkgf1kTy13DIjcQdRC1V8Q9Tad0T2wdIVBSaHX6zDn+E/Nb7sf2bY2TkwfzKs18cVlymb8Np4iKtdPs9rEwvfpClcC2CMR1+k7yz3DIHmurcNhdFHpSEulkOlI4mprsFeA1dtVFMH3Z1svWuHkREHtfm0d2f/AGp8qLa2KvaiuL9F6nRbGpVKi5zVd90eG9269F1LoYXxEVGXwXTuSz1JkOzUO3af4c1oWeAyODR3ndvKksMYa0NGQFFc7IwrnU/mlotOt/jz4M08XV5MeQtX5GRERdMVwREQBcq87hs9oNZYgXesKtdzbrPeuqiAi4wLY610Xnhpmi7N2XTDZxSGNrK5kaye1x1lb6IAudabms8ji+SCNzjm5zASacSuiiAwwQtY0MY0Na0UAAoANwCzIiA1bZYo5gGyxteAagOAIrv19q8WK7IYSTFExhIoS1obUcaLdRAadtu6KanWxMfo1ppNDqVzpXsXqxWCKEERRtYCakNAbU7zRbSIAiIgPD2AgggEHMHWCuDasHWN5r1WifsOc0csvcpCiAjdnwVY2GpjLvvPcRyFAu/DC1jQ1jQ1oyAAAHcFlRAFzrTc1nkcXyQRucaVc5gJNBQayuiiAwwQtY0MY0Na0UAAoANwCzIiA07bdsM1OtiY/RrTSaHUrStK9g5L1Y7DHCC2KNrATUhoDQTQCurbqC2kQBa9rsrJW6EjGvbUHRcARqy1FbCIDRsd1QQu0ooWMcRSrWgGmrVq7At5EQGrbbFHM3QlY17dzhXluK4cuB7GTUMe3gHup76qTIgOHd+FrJCQ5sQLhkXkvp2V1BdxEQBERAEREBGcXYXba26bKNnaPJccnD1XcNx2KqLXZXxPMcjS17c2nP8AqOKv1cq+rihtTdGVusea8ant7Du4GoWEo30K7GYBVvrhlLwfs+spFFKb5wLaYaujHXM3t1OA4s291VFngglrgQRmCKEdoKiatqUFWjOk7TVgvjWOe4MaKuc4UG8nJfHFSnBF2VranDOoj+BP8FBiKyo03N/tmxgcI8TWVNdvUlq/TtJJddhbBE2JuwazvJ1uP97KLbRGipoASdw1n3LkZSlOV3m34s+hxjGEbRVkvILJBC550Wip27hxK3LNdLna3+SNw1n5D3rsQwtYNFooP7z3q1wmyalR8qr9Meje/bjrwNariorKObMdjsojbQZnM7ytlEXTQhGEVGKskVzbbuwiIsjwIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC1bbYIphSWNjx9pod8VtIgeasRm0YGsL/8AxFv3XvHurRdGz3FCxrWNBDWtAArsC6qKKpRp1MpxT4q5jSjGk26aSv0KxosuuIfRr2kn3E0W1FGGijQANwFFkRe06UKf2JLgrEkpOWrCIikMQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//2Q==",
          }}
          emoneyImageProps={{
            height: "25px",
            width: "90px",
          }}
          emoneyStatus="success"
          koinLabel="Koin flip"
          koinValue="Rp100.000"
          onFailPressed={() => {}}
          onInfoPress={function noRefCheck() {}}
          onProcessingPressed={function noRefCheck() {}}
          saldoLabel="Saldo  Flip"
          saldoValue="Rp0"
          mb={"4"}
        />
        <BalanceCard
          emoneyImage={{
            uri: "data:image/jpeg;base64,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",
          }}
          emoneyImageProps={{
            height: "25px",
            width: "90px",
          }}
          emoneyStatus="on_progress"
          koinLabel="Koin flip"
          koinValue="Rp100.000"
          onFailPressed={() => {}}
          onInfoPress={function noRefCheck() {}}
          onProcessingPressed={function noRefCheck() {}}
          saldoLabel="Saldo  Flip"
          saldoValue="Rp0"
          mb={"4"}
          labelProcessing="Aktivasi dalam proses"
        />
        <BalanceCard
          emoneyImage={{
            uri: "data:image/jpeg;base64,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",
          }}
          emoneyImageProps={{
            height: "25px",
            width: "90px",
          }}
          emoneyStatus="rejected"
          koinLabel="Koin flip"
          koinValue="Rp100.000"
          onFailPressed={() => {}}
          onInfoPress={function noRefCheck() {}}
          onProcessingPressed={function noRefCheck() {}}
          saldoLabel="Saldo  Flip"
          saldoValue="Rp0"
          mb={"4"}
          labelFail="Aktivasi gagal"
        /> */}
        <Flex
          borderWidth="1"
          bg="flipOrange.Minus3"
          borderColor="flipOrange.Minus3"
          rounded="16"
          justifyContent="space-between"
          flexDirection="row"
          p="4"
          mb="4"
        >
          <Text>Sisa limit transaksi Rp500.000</Text>
        </Flex>
        <HStack justifyContent="space-between">
          <Box alignItems="center">
            <IconButton
              w="11"
              h="11"
              mb="1"
              variant="jadeGreen"
              icon={<FlipGlobe size="7" />}
            />
            <Text fontSize="xs">Flip Globe</Text>
          </Box>
          <Box alignItems="center">
            <IconButton
              w="11"
              h="11"
              mb="1"
              variant="sapphireBlue"
              icon={<Pulsa size="7" />}
            />
            <Text fontSize="xs">Pulsa</Text>
          </Box>
          <Box alignItems="center">
            <IconButton
              w="11"
              h="11"
              mb="1"
              variant="sapphireBlue"
              icon={<PaketData size="7" />}
            />
            <Text fontSize="xs">Paket Data</Text>
          </Box>
          <Box alignItems="center">
            <IconButton
              w="11"
              h="11"
              mb="1"
              variant="goldenYellow"
              icon={<Refund size="7" />}
            />
            <Text fontSize="xs">Refund</Text>
            <Badge
              type="indicator"
              colorScheme="crimsonRed"
              _box={{
                position: "absolute",
                alignSelf: "center",
                top: 0,
                right: -10,
              }}
              label={"New"}
            />
          </Box>
          <Box alignItems="center">
            <IconButton
              variant="neutral"
              w="11"
              h="11"
              mb="1"
              icon={<Lainnya size="7" />}
            />
            <Text fontSize="xs">Lainnya</Text>
          </Box>
        </HStack>
      </Box>
      <ScrollView px="5" pb="10">
        <VStack space="4">
          <Box>
            <Text fontWeight="bold" fontSize="2xl">
              Product Icon
            </Text>
            <HStack flexWrap="wrap" space="4" alignItems="center">
              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<FlipGlobe size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<ListrikPln color="white" size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<PaketData color="white" size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<Pulsa color="white" size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<Refund color="white" size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<SendMoney color="white" size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<TarikSaldo color="white" size="7" />}
              />

              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<Topup color="white" size="7" />}
              />
              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<Pdam color="white" size="7" />}
              />
              <IconButton
                w="11"
                h="11"
                variant="flipOrange"
                icon={<Funding color="white" size="7" />}
              />
              <IconButton
                w="11"
                h="11"
                variant="neutral"
                icon={<Lainnya size="7" />}
              />
            </HStack>
          </Box>

          <Box>
            <Text fontWeight="bold" fontSize="2xl">
              Function Icon
            </Text>
            <HStack flexWrap="wrap" space="4" alignItems="center">
              <ArrowDown size="12" />
              <ArrowUp size="12" />
              <Calendar size="12" />
              <ContactBook size="12" />
              <Copy size="12" />
              <Delete size="12" />
              <Download size="12" />
              <Edit size="12" />
              <Filter size="12" />
              <Gallery size="12" />
              <Hamburger size="12" />
              <Identity size="12" />
              <Location size="12" />
              <LogOut size="12" />
              <Maps size="12" />
              <MeatballMenu size="12" />
              <Money size="12" />
              <PersonalInformation size="12" />
              <Phone size="12" />
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </Flex>
  );
};

export default PagesIconButton;
