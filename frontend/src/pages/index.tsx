import { Box, Stack, Typography, styled } from '@mui/material';

import { useLocale } from '@/common/hooks';
import { Page } from '@/components/functional';
import { CustomLink } from '@/components/parts';
import { ConfigWithSubtitle } from '@/config';
import { ibmPlex } from '@/libs/theme/overrides/CssBaseline';

const StyledWrapper = styled(Stack)(({ theme }) => ({
  padding: '40px 60px',
  maxWidth: '800px',
  marginBottom: '100px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 30px',
    maxWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

export default function Home() {
  const { t } = useLocale();
  const body = t.TopPage;

  const widgetConfig = ConfigWithSubtitle.find(
    (config) => config.title == 'Widgets'
  );
  const widgetItems = widgetConfig!.items;

  return (
    <Page
      config={{
        title: body.title,
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
                fontSize: '25px',
              },
            })}
          >
            {body[0]}
          </Typography>
          <Typography variant="body1">{body[1]}</Typography>
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
            {body['2_head']}
          </Typography>

          {Object.entries(widgetItems).map(([subTitle, items]) => {
            return (
              <Box key={subTitle}>
                <Stack
                  sx={{
                    color: '#6B7A90',
                    my: 2,
                    mt: 5,
                    fontWeight: 'bold',
                    fontSize: '14px',
                    fontFamily: ibmPlex.style.fontFamily,
                  }}
                >
                  {subTitle}
                </Stack>
                <Stack
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    width: '100%',
                    maxWidth: '800px',
                    gap: '16px',
                  }}
                >
                  {items.map((widgetItem) => {
                    const Icon = widgetItem.icon;
                    return (
                      <CustomLink
                        key={widgetItem.title}
                        href={widgetItem.link}
                        noStyle
                      >
                        <Stack
                          sx={{
                            alignItems: 'center',
                            border: '1px solid #E5EAF2',
                            backgroundColor: '#F5F5F5',
                            borderRadius: '10px',
                          }}
                        >
                          {Icon && (
                            <Stack sx={{ padding: '20px' }}>
                              <Icon
                                sx={{
                                  fontSize: '60px',
                                }}
                              />
                            </Stack>
                          )}
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
                            {widgetItem.title}
                          </Stack>
                        </Stack>
                      </CustomLink>
                    );
                  })}
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </StyledWrapper>
    </Page>
  );
}
