import { SmartButtonRounded } from '@mui/icons-material';
import { Stack, Typography, styled } from '@mui/material';

import { Page } from '@/components/functional';
import { CustomLink } from '@/components/parts';

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: '40px 60px',
  maxWidth: '800px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 30px',
    maxWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

export default function Home() {
  return (
    <Page
      config={{
        title: 'Flutter図鑑 - 触って理解するFlutterサンプル集',
      }}
    >
      <StyledWrapper>
        <Stack
          gap="10px"
          sx={(theme) => ({
            my: '40px',
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center',
              maxWidth: '340px',
              margin: '40px auto',
            },
          })}
        >
          <Typography
            variant="h1"
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                fontSize: '20px',
              },
            })}
          >
            Flutterをもっとシンプルに。
          </Typography>
          <Typography variant="body1">
            Flutter図鑑は
            Flutterから提供されているWidgetサンプルが集まった情報メディアです。
          </Typography>
        </Stack>

        <Stack
          sx={(theme) => ({
            mt: '40px',
          })}
        >
          <Typography
            variant="h2"
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
              },
            })}
          >
            Widget一覧
          </Typography>

          <Stack
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              width: '100%',
              maxWidth: '800px',
              mt: '20px',
            }}
          >
            <CustomLink href="/widgets/Button" noStyle>
              <Stack
                sx={{
                  alignItems: 'center',
                  border: '1px solid #E5EAF2',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '10px',
                }}
              >
                <SmartButtonRounded
                  sx={{
                    padding: '10px',
                    fontSize: '100px',
                  }}
                />
                <Stack
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    padding: '10px',
                    fontWeight: 'bold',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  Button
                </Stack>
              </Stack>
            </CustomLink>
          </Stack>
        </Stack>
      </StyledWrapper>
    </Page>
  );
}
